import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { listarPsicologosPublicos, agendarConsulta } from "../../Api";

function AgendamentoConsultas() {

    const [psicologos, setPsicologos] = useState([]);
    const [horariosSelecionados, setHorariosSelecionados] = useState({});
    const [mensagem, setMensagem] = useState("");

    
    const [erro, setErro] = useState("");
    const navigate = useNavigate();
  
    useEffect(() => {
      listarPsicologosPublicos()
        .then(setPsicologos)
        .catch(() => setMensagem("Erro ao carregar psicólogos"));
    }, []);
  
    const handleHorarioChange = (psicologoIndex, horarioId) => {
      setHorariosSelecionados({
        ...horariosSelecionados,
        [psicologoIndex]: horarioId,
      });
    };
  
    const handleAgendar = async (horarioId) => {
      const pacienteId = sessionStorage.getItem("usuarioId");
    
      try {
        await agendarConsulta(pacienteId, {
          horarioDisponivelId: horarioId,
          observacoes: "",
        });
    
        setErro("");
        setMensagem("Consulta agendada com sucesso!");
    
        setTimeout(() => {
          navigate("/consultasAgendadas");
        }, 2000); 
      } catch (e) {
        setMensagem("");
        setErro(e.message || "Erro ao agendar consulta.");
      }
    };
  

  return (
    <div className="bg-gradient-to-b from-blue-300 to-blue-100 min-h-screen flex flex-col">
      {/* NAVBAR */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-8">
              <Link
                to="/indexLogado"
                className="text-xl font-semibold text-blue-900"
              >
                Agenda Psi
              </Link>
              <Link
                to="/consultasAgendadas"
                className="text-blue-900 hover:text-blue-600 transition-colors"
              >
                Consultas
              </Link>
              <Link
                to="/agendamentoConsultas"
                className="text-blue-900 hover:text-blue-600 transition-colors"
              >
                Agendar Consulta
              </Link>
              <Link
                to="/meuPerfil"
                className="text-blue-900 hover:text-blue-600 transition-colors"
              >
                Meu Perfil
              </Link>
            </div>
            <div>
              <Link
                to="/"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sair
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* CONTEÚDO */}
      <div className="flex flex-col items-center justify-center flex-1 p-4">
        <h2 className="text-3xl font-semibold text-blue-900 mb-8">Agende sua Consulta</h2>

        {mensagem && <p className="text-green-600 text-center mb-4">{mensagem}</p>}
        {erro && <p className="text-red-600 text-center mb-4">{erro}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl">
          {psicologos.map((psicologo, index) => (
            <div key={index} className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">{psicologo.nomeCompleto}</h3>
              <p><strong>Especialidade:</strong> {psicologo.especialidade}</p>
              <p><strong>Abordagem:</strong> {psicologo.abordagem}</p>
              <p><strong>Tempo de exercício:</strong> {psicologo.tempoExercicio}</p>

              <div className="mt-4">
                <label className="block text-sm mb-1">Escolha um horário:</label>
                <select
                  className="w-full px-3 py-2 border rounded"
                  value={horariosSelecionados[index] || ""}
                  onChange={(e) => handleHorarioChange(index, e.target.value)}
                >
                  <option value="">Selecione um horário</option>
                  {psicologo.horariosDisponiveis.map((h, hIndex) => (
                    <option key={h.id} value={h.id}>
                    {h.diaSemana} - {h.horarioInicio} às {h.horarioFim}
                  </option>
                  
                  ))}
                </select>
              </div>

              <button
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                disabled={!horariosSelecionados[index]}
                onClick={() => handleAgendar(horariosSelecionados[index])}
              >
                Agendar Consulta
              </button>

            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default AgendamentoConsultas;

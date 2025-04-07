import { Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { buscarConsultasPaciente, buscarConsultasPsicologo } from "../../Api";

function ConsultasAgendadas() {

  const [consultas, setConsultas] = useState([]);
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const id = sessionStorage.getItem("usuarioId");
  const tipo = sessionStorage.getItem("tipoUsuario");

  useEffect(() => {
    if (!id || !tipo) {
      navigate("/login");
      return;
    }

    const carregarConsultas = async () => {
      try {
        const dados = tipo === "paciente"
          ? await buscarConsultasPaciente(id)
          : await buscarConsultasPsicologo(id);
        setConsultas(dados);
      } catch (e) {
        setErro("Erro ao carregar consultas.");
      }
    };

    carregarConsultas();
  }, [id, tipo, navigate]);

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
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">
            Consultas Agendadas
          </h2>

          {erro && <p className="text-red-500 text-center">{erro}</p>}

          <ul className="space-y-4 text-blue-900">
            {consultas.map((c, index) => (
              <li key={index} className="border rounded-lg p-4 shadow-sm">
                {tipo === "paciente" ? (
                  <>
                    <p><strong>Psicólogo:</strong> {c.nomeCompleto}</p>
                  </>
                ) : (
                  <>
                    <p><strong>Paciente:</strong> {c.nome}</p>
                    <p><strong>E-mail:</strong> {c.email}</p>
                  </>
                )}
                <p><strong>Data:</strong> {c.dataHora.split("T")[0]}</p>
                <p><strong>Horário:</strong> {c.dataHora.split("T")[1].substring(0, 5)}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-center">
            <Link
              to="/agendamentoConsultas"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Agendar nova consulta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultasAgendadas;

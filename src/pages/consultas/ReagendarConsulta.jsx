import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  buscarHorariosPorConsulta,
  reagendarConsulta,
} from "../../Api";
import NavbarLogado from "../../components/navbarLogado";

function ReagendarConsulta() {
  const { consultaId } = useParams();
  const pacienteId = sessionStorage.getItem("usuarioId");

  const [horarios, setHorarios] = useState([]);
  const [novoHorarioId, setNovoHorarioId] = useState("");
  const [observacoes, setObservacoes] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const carregarHorarios = async () => {
      try {
        const horariosDisponiveis = await buscarHorariosPorConsulta(consultaId);
        setHorarios(horariosDisponiveis);
      } catch (e) {
        setErro(e.message);
      }
    };

    carregarHorarios();
  }, [consultaId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await reagendarConsulta(pacienteId, consultaId, {
        novoHorarioId,
        observacoes,
      });
      setMensagem("Consulta reagendada com sucesso!");
      setErro("");

      setTimeout(() => {
        navigate("/consultasAgendadas");
      }, 2000);
    } catch (e) {
      setErro(e.message);
      setMensagem("");
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-300 to-blue-100 min-h-screen flex flex-col">
      {/* NAVBAR */}
      <NavbarLogado />

      {/* CONTEÚDO */}
      <div className="flex items-center justify-center flex-1 p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Reagendar Consulta</h2>

          {erro && <p className="text-red-600 mb-4">{erro}</p>}
          {mensagem && <p className="text-green-600 mb-4">{mensagem}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-blue-900 mb-1">Novo Horário</label>
              <select
                value={novoHorarioId}
                onChange={(e) => setNovoHorarioId(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              >
                <option value="">Selecione um horário</option>
                {horarios.map((h) => (
                  <option key={h.id} value={h.id}>
                    {h.diaSemana} - {h.horarioInicio} às {h.horarioFim}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-blue-900 mb-1">Observações (opcional)</label>
              <textarea
                value={observacoes}
                onChange={(e) => setObservacoes(e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Digite alguma observação..."
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-4 py-2 border border-blue-700 text-blue-700 rounded hover:bg-blue-50"
                onClick={() => navigate("/consultasAgendadas")}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                disabled={!novoHorarioId}
              >
                Confirmar Reagendamento
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReagendarConsulta;

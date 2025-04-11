import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  buscarConsultasPaciente,
  buscarConsultasPsicologo,
  cancelarConsulta,
  marcarConsultaComoRealizada,
} from "../../Api";
import NavbarLogado from "../../components/navbarLogado";

function ConsultasAgendadas() {

  const [consultas, setConsultas] = useState([]);
  const [erro, setErro] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [confirmarCancelamentoId, setConfirmarCancelamentoId] = useState(null);
  const [statusFiltro, setStatusFiltro] = useState("AGENDADA");
  const [diaSemanaFiltro, setDiaSemanaFiltro] = useState("");

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
        const dados =
          tipo === "paciente"
            ? await buscarConsultasPaciente(id)
            : await buscarConsultasPsicologo(id);
        setConsultas(dados);
      } catch (e) {
        setErro("Erro ao carregar consultas.");
      }
    };

    carregarConsultas();
  }, [id, tipo, navigate]);

  const handleCancelar = async (consultaId) => {
    try {
      await cancelarConsulta(id, consultaId);
      setConsultas((prev) => prev.filter((c) => c.id !== consultaId));
      setMensagem("Consulta cancelada com sucesso.");
      setErro("");
      setConfirmarCancelamentoId(null);
    } catch (e) {
      setErro(e.message || "Erro ao cancelar consulta.");
      setMensagem("");
    }
  };

  const handleMarcarComoRealizada = async (consultaId) => {
    try {
      await marcarConsultaComoRealizada(id, consultaId);
      setConsultas((prev) =>
        prev.map((c) => (c.id === consultaId ? { ...c, status: "REALIZADA" } : c))
      );
      setMensagem("Consulta marcada como realizada.");
    } catch (e) {
      setErro(e.message || "Erro ao realizar consulta.");
    }
  };

  const consultasFiltradas = consultas.filter(
    (c) =>
      c.status === statusFiltro &&
      (!diaSemanaFiltro || new Date(c.dataHora).toLocaleDateString("pt-BR", { weekday: "long" }) === diaSemanaFiltro)
  );

  const diasSemana = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];

  return (
    <div className="bg-gradient-to-b from-blue-300 to-blue-100 min-h-screen flex flex-col">
      <NavbarLogado />

      <div className="flex flex-col items-center justify-center flex-1 p-4">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">
            Consultas {tipo === "paciente" ? "Agendadas" : "do Psicólogo"}
          </h2>

          {tipo === "psicologo" && (
            <>
              <div className="flex justify-center gap-4 mb-4">
                {["AGENDADA", "REALIZADA", "CANCELADA"].map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFiltro(status)}
                    className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                      statusFiltro === status
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-blue-900 hover:bg-blue-100"
                    }`}
                  >
                    {status.charAt(0) + status.slice(1).toLowerCase()}
                  </button>
                ))}
              </div>
              <div className="mb-6 text-center">
                <label className="text-sm text-blue-900 mr-2">Filtrar por dia da semana:</label>
                <select
                  value={diaSemanaFiltro}
                  onChange={(e) => setDiaSemanaFiltro(e.target.value)}
                  className="px-3 py-1 rounded border"
                >
                  <option value="">Todos</option>
                  {diasSemana.map((dia) => (
                    <option key={dia} value={dia}>{dia}</option>
                  ))}
                </select>
              </div>
            </>
          )}

          {erro && <p className="text-red-500 text-center">{erro}</p>}
          {mensagem && <p className="text-green-600 text-center">{mensagem}</p>}

          {consultasFiltradas.length === 0 ? (
            <p className="text-blue-900 text-center">
              Nenhuma consulta {statusFiltro.toLowerCase()} encontrada.
            </p>
          ) : (
            <ul className="space-y-4 text-blue-900">
              {consultasFiltradas.map((c) => (
                <li key={c.id} className="border rounded-lg p-4 shadow-sm">
                  {tipo === "paciente" ? (
                    <p><strong>Psicólogo:</strong> {c.psicologo}</p>
                  ) : (
                    <>
                      <p><strong>Paciente:</strong> {c.paciente}</p>
                      <p><strong>E-mail:</strong> {c.emailPaciente}</p>
                    </>
                  )}
                  <p><strong>Data:</strong> {c.dataHora.split("T")[0]}</p>
                  <p><strong>Horário:</strong> {c.dataHora.split("T")[1].substring(0, 5)}</p>

                  {tipo === "paciente" && statusFiltro === "AGENDADA" && (
                    <div className="mt-4 flex gap-2 flex-wrap">
                      <button
                        className="px-4 py-1 rounded bg-yellow-400 text-white hover:bg-yellow-500 hover:cursor-pointer"
                        onClick={() => navigate(`/reagendar-consulta/${c.id}`)}
                      >
                        Reagendar
                      </button>

                      {confirmarCancelamentoId === c.id ? (
                        <>
                          <span className="text-sm text-blue-900 self-center">
                            Deseja cancelar?
                          </span>
                          <button
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 hover:cursor-pointer"
                            onClick={() => handleCancelar(c.id)}
                          >
                            Sim
                          </button>
                          <button
                            className="px-3 py-1 bg-gray-300 text-blue-900 rounded hover:bg-gray-400 hover:cursor-pointer"
                            onClick={() => setConfirmarCancelamentoId(null)}
                          >
                            Não
                          </button>
                        </>
                      ) : (
                        <button
                          className="px-4 py-1 rounded bg-red-500 text-white hover:bg-red-400 hover:cursor-pointer"
                          onClick={() => setConfirmarCancelamentoId(c.id)}
                        >
                          Cancelar
                        </button>
                      )}
                    </div>
                  )}

                  {tipo === "psicologo" && statusFiltro === "AGENDADA" && (
                    <button
                      className="mt-4 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 hover:cursor-pointer"
                      onClick={() => handleMarcarComoRealizada(c.id)}
                    >
                      Marcar como realizada
                    </button>
                  )}
                </li>
              ))}
            </ul>
          )}

          {tipo === "paciente" && (
            <div className="mt-8 text-center flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => navigate("/agendamentoConsultas")}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors hover:cursor-pointer"
              >
                Agendar nova consulta
              </button>

              <button
                onClick={() => navigate("/ConsultasRealizadas")}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors hover:cursor-pointer"
              >
                Consultas realizadas
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ConsultasAgendadas;

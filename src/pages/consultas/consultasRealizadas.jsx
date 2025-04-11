import { useEffect, useState } from "react";
import { buscarConsultasPaciente } from "../../Api";
import { useNavigate } from "react-router-dom";
import NavbarLogado from "../../components/navbarLogado";

function HistoricoConsultasRealizadas() {
  const [consultas, setConsultas] = useState([]);
  const [erro, setErro] = useState("");
  const navigate = useNavigate();
  const pacienteId = sessionStorage.getItem("usuarioId");

  useEffect(() => {
    const carregarConsultas = async () => {
      try {
        const todas = await buscarConsultasPaciente(pacienteId);
        const realizadas = todas.filter(c => c.status === "REALIZADA");
        setConsultas(realizadas);
      } catch (e) {
        setErro("Erro ao carregar histórico de consultas.");
      }
    };

    carregarConsultas();
  }, [pacienteId]);

  return (
    <div className="bg-gradient-to-b from-blue-300 to-blue-100 min-h-screen flex flex-col">
      <NavbarLogado />

      <div className="flex flex-col items-center justify-center flex-1 p-4">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">
            Consultas Realizadas
          </h2>

          {erro && <p className="text-red-500 text-center">{erro}</p>}

          {consultas.length === 0 ? (
            <p className="text-blue-900 text-center">
              Nenhuma consulta realizada encontrada.
            </p>
          ) : (
            <ul className="space-y-4 text-blue-900">
              {consultas.map((c) => (
                <li key={c.id} className="border rounded-lg p-4 shadow-sm">
                  <p><strong>Psicólogo:</strong> {c.psicologo}</p>
                  <p><strong>Data:</strong> {c.dataHora.split("T")[0]}</p>
                  <p><strong>Horário:</strong> {c.dataHora.split("T")[1].substring(0, 5)}</p>
                  {c.observacoes && <p><strong>Observações:</strong> {c.observacoes}</p>}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate("/consultasAgendadas")}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoricoConsultasRealizadas;

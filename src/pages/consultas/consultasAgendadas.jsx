import { Link } from "react-router-dom";

function ConsultasAgendadas() {
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

          {/* LISTA DE CONSULTAS */}
          <ul className="space-y-4 text-blue-900">
            <li className="border rounded-lg p-4 shadow-sm">
              <p>
                <strong>Psicóloga:</strong> Dra. Camila Santos
              </p>
              <p>
                <strong>Data:</strong> 15/04/2025
              </p>
              <p>
                <strong>Horário:</strong> 14:00
              </p>
              <p>
                <strong>Modalidade:</strong> Online
              </p>
            </li>

            <li className="border rounded-lg p-4 shadow-sm">
              <p>
                <strong>Psicóloga:</strong> Dra. Milena Melo
              </p>
              <p>
                <strong>Data:</strong> 20/04/2025
              </p>
              <p>
                <strong>Horário:</strong> 10:30
              </p>
              <p>
                <strong>Modalidade:</strong> Presencial
              </p>
            </li>
          </ul>

          {/* Botão */}
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

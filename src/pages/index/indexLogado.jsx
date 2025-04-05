import { Link, NavLink } from "react-router-dom";


function IndexLogado() {
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
              <NavLink
                to="/consultasAgendadas"
                className="text-blue-900 hover:text-blue-600 transition-colors"
              >
                Consultas
              </NavLink>
              <NavLink
                to="/agendamentoConsultas"
                className="text-blue-900 hover:text-blue-600 transition-colors"
              >
                Agendar Consulta
              </NavLink>
              <NavLink
                to="/meuPerfil"
                className="text-blue-900 hover:text-blue-600 transition-colors"
              >
                Meu Perfil
              </NavLink>
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
        <h2 className="text-3xl sm:text-4xl text-blue-900 text-center">
          Bem-vindo(a) ao
        </h2>
        <h1 className="text-5xl sm:text-7xl font-bold mt-4 text-blue-900 text-center">
          Agenda Psi
        </h1>

        <div className="mt-16 w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">
          <h4 className="text-xl font-semibold text-blue-900 mb-4">
            Nossos Psicólogos
          </h4>
          <ul className="list-disc list-inside text-blue-800 space-y-2 pl-4">
            <li>Dra. Gleice Kelly Macêdo</li>
            <li>Dra. Camila Santos</li>
            <li>Dra. Milena Melo</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default IndexLogado;

import { Link } from "react-router-dom";

function AgendamentoConsultas() {
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
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">
            Agendamento de Consultas
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-blue-900 mb-1">Nome completo</label>
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-blue-900 mb-1">Telefone</label>
              <input
                type="text"
                placeholder="(xx) xxxxx-xxxx"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-blue-900 mb-1">E-mail</label>
              <input
                type="email"
                placeholder="seuemail@exemplo.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-blue-900 mb-1">
                Nome do Psicólogo
              </label>
              <input
                type="text"
                placeholder="Nome do Psicólogo"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-blue-900 mb-1">Data da Consulta</label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-blue-900 mb-1">
                Horário da Consulta
              </label>
              <input
                type="time"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-blue-900 mb-2">
                Modalidade da Consulta
              </label>
              <div className="flex items-center space-x-4 text-blue-900">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="mod" value="online" />
                  <span>Online</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="mod" value="presencial" />
                  <span>Presencial</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-blue-900 mb-1">Local da Consulta</label>
              <input
                type="text"
                placeholder="Endereço ou link"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <Link
              to="/consultasAgendadas"
              className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Finalizar Agendamento
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AgendamentoConsultas;

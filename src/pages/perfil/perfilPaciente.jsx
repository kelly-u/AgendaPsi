import { Link } from "react-router-dom";

function MeuPerfilPaciente() {
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
            Perfil do Paciente
          </h2>

          <div className="space-y-4 text-blue-900">
            <p>
              <strong>Nome completo:</strong> Gleice Kelly Macêdo da Silva
            </p>
            <p>
              <strong>CPF:</strong> 000.000.000-00
            </p>
            <p>
              <strong>Telefone:</strong> (81) 90000-0000
            </p>
            <p>
              <strong>E-mail:</strong> xxxxxxxx@x.com
            </p>
            <p>
              <strong>Gênero:</strong> Feminino
            </p>
            <p>
              <strong>Data de Nascimento:</strong> 07/03/1998
            </p>
            <p>
              <strong>Senha:</strong> **********
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/edtPerfilPaciente"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Editar Perfil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeuPerfilPaciente;

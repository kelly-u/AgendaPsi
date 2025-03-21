import { Link, NavLink } from "react-router-dom";

function MeuPerfil() {
  return (
    <div className="bg-blue-300 min-h-screen text-base">
      <NavLink className="bg-blue-300 text-blue-950">
        {/* DEFININDO O MENU RESPONSIVO */}
        <div className="mx-auto px-4 sm:px-6 lg:px-8 border-b-2 border-white">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/indexLogado">Início</Link>
              <Link to="/consultasAgendadas">Consultas Agendadas</Link>
              <Link to="/agendamentoConsultas">Agendamento de Consultas</Link>
              <div className="absolute right-0 pr-8 space-x-4">
                <Link to="/meuPerfil">Meu Perfil</Link>
                <Link to="/">Sair</Link>
              </div>
            </div>
          </div>
        </div>
        {/* FINALIZANDO O MENU */}
      </NavLink>

      <div className="text-3xl pl-[3%] pt-[5%] text-blue-900 space-x-20">
        <Link to="/perfilPaciente">Perfil de Paciente</Link>

        <Link to="/perfilPsicologo">Perfil de Psicólogo</Link>
      </div>
    </div>
  );
}

export default MeuPerfil;

import { Link, NavLink } from "react-router-dom";

function Index() {
  return (
    <div className="bg-blue-300 min-h-screen text-base">
      <NavLink className="bg-blue-300 text-blue-950">
        {/* DEFININDO O MENU RESPONSIVO */}
        <div className="mx-auto px-4 sm:px-6 lg:px-8 border-b-2 border-white">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/">Início</Link>
              <div className="absolute right-0 pr-8 space-x-4">
                <Link to="/login">Login</Link>
                <Link to="/cadastroPaciente">Cadastro Paciente</Link>
                <Link to="/cadastroPsicologo">Cadastro psicólogo</Link>
              </div>
            </div>
          </div>
        </div>
        {/* FINALIZANDO O MENU */}
      </NavLink>
      <div className="text-blue-950 pt-8">
        <div className="p-[10%] flex flex-col justify-center items-center">
          <h2 class="text-center text-4xl">Bem-vindo(a) ao</h2>
          <h1 class="text-center pl-[15%] text-7xl">Agenda Psi</h1>
        </div>

        <div className="pt-0 p-[5%] text-blue-900">
          <h4>Nossos Psicólogos</h4>
          <div className="text-blue-800">
            <h5 className="pl-8">Dra. Gleice Kelly Macêdo</h5>
            <h5 className="pl-8">Dra. Camila Santos</h5>
            <h5 className="pl-8">Dra. Milena Melo</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;

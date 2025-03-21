import { Link, NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="bg-blue-300 min-h-screen">
      <NavLink className="bg-blue-300 text-blue-950">
        {/* DEFININDO O MENU RESPONSIVO */}
        <div className="mx-auto px-4 sm:px-6 lg:px-8 border-b-2 border-white">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/">Início</Link>
            </div>
          </div>
        </div>
        {/* FINALIZANDO O MENU */}
      </NavLink>
      <div className="text-blue-900 pt-[1%]">
        <div className="p-[10%] flex flex-col pb-[5%]">
          <h2 class="text-left text-3xl pb-[3%]">Login</h2>

          <div className="text-left pl-[3%] text-2xl">
            <form action="">
              <label>E-mail: </label>
              <input placeholder="xxxxxxxxx@x.com" type="email" />
              <br />

              <label>Senha: </label>
              <input placeholder="Senha" type="password" />
              <br />
              <br />

              <Link to="/consultasAgendadas">Entrar</Link>
            </form>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center pt-0 p-[2%] text-1xl">
          <h3>Não possui conta?</h3>

          {/*
      <button>Cadastro Paciente</button>
      <button>Cadastro Psicólogo</button>
      */}

          <div className="text-blue-800 space-x-5">
            <Link to="/CadastroPaciente">Cadastro Paciente </Link>
            <Link to="/CadastroPsicologo">Cadastro Psicólogo</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

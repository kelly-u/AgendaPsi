import { Link, NavLink } from "react-router-dom";

function CadastroPsicologo() {
  return (
    <div className="bg-blue-300 min-h-screen text-base">
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
        <div className="pl-[10%] pb-[5%] p-[4%] flex flex-col ">
          <h2 class="text-left text-3xl pb-[3%]">Cadastro de Psicólogo</h2>

          <div className="text-left pl-[3%] text-2xl">
            <form action="">
              <label>Nome completo: </label>
              <input placeholder="Seu nome" type="text" />
              <br />

              <label>CPF: </label>
              <input placeholder="xxxxxxxxxxx" type="text" />
              <br />

              <label>Telefone: </label>
              <input placeholder="xx 9xxxxxxxx" type="text" />
              <br />

              <label>E-mail: </label>
              <input placeholder="xxxxxxxxx@x.com" type="email" />
              <br />

              <label>Gênero: </label>
              <input placeholder="Gênero" type="text" />
              <br />

              <label>Data de Nascimento: </label>
              <input type="date" />
              <br />

              <label>CRP: </label>
              <input placeholder="CRP" type="text" />
              <br />

              <label>Senha: </label>
              <input placeholder="Senha" type="password" />
              <br />
              <br />

              <Link to="/login">Cadastro</Link>
            </form>
          </div>
        </div>

        {/* Ao invés do 'a', utilizamos o componente do react link */}
        <div className="flex flex-col justify-center items-center pt-0 p-[2%] text-1xl text-blue-800">
          <Link to="/login">Já tem uma conta? Faça login!</Link>
        </div>
      </div>
    </div>
  );
}

export default CadastroPsicologo;

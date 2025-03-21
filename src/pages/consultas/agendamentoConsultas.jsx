import { Link, NavLink } from "react-router-dom";

function AgendamentoConsultas() {
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

      <div className="text-blue-900 pt-[1%]">
        <div className="pl-[10%] pb-[5%] p-[4%] flex flex-col ">
          <h2 class="text-left text-3xl pb-[3%]">Agendamento de Consultas</h2>

          <div className="text-left pl-[3%] text-2xl">
            <form action="">
              <label>Nome completo: </label>
              <input placeholder="Seu nome" type="text" />
              <br />

              <label>Telefone: </label>
              <input placeholder="xx 9xxxxxxxx" type="text" />
              <br />

              <label>E-mail: </label>
              <input placeholder="xxxxxxxxx@x.com" type="email" />
              <br />

              <label>Nome do psicólogo: </label>
              <input placeholder="Nome do psi" type="text" />
              <br />

              <label>Data da Consulta: </label>
              <input type="date" />
              <br />

              <label>Horário da Consulta: </label>
              <input type="time" />
              <br />

              <fieldset>
                <legend>Modalidade da consulta:</legend>
                <div className="text-blue-500">
                  <input type="radio" id="online" name="mod" value="online" />
                  <label for="online">Online </label>

                  <input
                    type="radio"
                    id="presencial"
                    name="mod"
                    value="presencial"
                  />
                  <label for="presencial">Presencial</label>
                </div>
              </fieldset>

              <label>Local da Consulta: </label>
              <input placeholder="Local" type="text" />
              <br />
              <br />

              <Link to="/consultasAgendadas">Finalizar Agendamento</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgendamentoConsultas;

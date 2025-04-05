import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

function CadastroPaciente() {
  const nomeCompletoRef = useRef()
  const cpfRef = useRef()
  const generoRef = useRef()
  const dataNascimentoRef = useRef()
  const emailRef = useRef()
  const senhaRef = useRef()

  function handleSubmit(event) {
    event.preventDefault();
  
    const paciente = {
      nomeCompleto: nomeCompletoRef.current.value,
      cpf: cpfRef.current.value,
      genero: generoRef.current.value,
      dataNascimento: dataNascimentoRef.current.value,
      email: emailRef.current.value,
      senha: senhaRef.current.value
    };
  
    fetch("http://localhost:8080/pacientes/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(paciente)
    })
    .then(response => response.json())
    .then(data => {
      alert("Cadastro realizado com sucesso!");
    })
    .catch(error => {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao cadastrar paciente.");
    });
  }

  const navigate = useNavigate();
  

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
          <h2 className="text-left text-3xl pb-[3%]">Cadastro de Paciente</h2>

          <div className="text-left pl-[3%] text-2xl">
            <form onSubmit={handleSubmit}>
              <label>Nome completo: </label>
              <input ref={nomeCompletoRef} placeholder="Seu nome" type="text" />
              <br />

              <label>CPF: </label>
              <input ref={cpfRef} placeholder="xxxxxxxxxxx" type="text" />
              <br />

              <label>Gênero: </label>
              <input ref={generoRef} placeholder="Gênero" type="text" />
              <br />

              <label>Data de Nascimento: </label>
              <input ref={dataNascimentoRef} type="date" />
              <br />
              
              <label>E-mail: </label>
              <input ref={emailRef} placeholder="seuemail@email.com" type="email" />
              <br />

              <label>Senha: </label>
              <input ref={senhaRef} placeholder="Senha" type="password" />
              <br />
              <br />

              <button onClick={() => navigate("/login")} className="bg-blue-950 text-white py-2 px-4 rounded-md hover:underline">Cadastro</button>
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
export default CadastroPaciente;

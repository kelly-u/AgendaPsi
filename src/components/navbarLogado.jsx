import { useNavigate } from "react-router-dom";

function NavbarLogado() {
  const navigate = useNavigate();
  const tipo = sessionStorage.getItem("tipoUsuario");

  const irParaPerfil = () => {
    if (tipo === "paciente") {
      navigate("/perfilPaciente");
    } else if (tipo === "psicologo") {
      navigate("/perfilPsicologo");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-8">
            <button
              onClick={() => navigate("/indexLogado")}
              className="text-xl font-semibold text-blue-900 hover:cursor-pointer"
            >
              Agenda Psi
            </button>
            <button
              onClick={() => navigate("/consultasAgendadas")}
              className="text-blue-900 hover:text-blue-600 transition-colors hover:cursor-pointer"
            >
              Consultas
            </button>
            <button
              onClick={irParaPerfil}
              className="text-blue-900 hover:text-blue-600 transition-colors hover:cursor-pointer"
            >
              Meu Perfil
            </button>
          </div>
          <div>
            <button
              onClick={() => navigate("/")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors hover:cursor-pointer"
            >
              Sair
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarLogado;

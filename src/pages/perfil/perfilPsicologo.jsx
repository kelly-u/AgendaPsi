import { useEffect, useState } from "react";
import { buscarDadosPessoaisPsicologo } from "../../Api";
import { Link } from "react-router-dom";
import NavbarLogado from "../../components/navbarLogado";

function MeuPerfilPsicologo() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    const psicologoId = sessionStorage.getItem("usuarioId");
    if (psicologoId) {
      buscarDadosPessoaisPsicologo(psicologoId)
        .then(setDados)
        .catch((err) => console.error("Erro ao carregar dados:", err));
    }
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-300 to-blue-100 min-h-screen flex flex-col">
      {/* NAVBAR */}
      <NavbarLogado />


      {/* CONTEÚDO */}
      <div className="flex flex-col items-center justify-center flex-1 p-4">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">
            Perfil do Psicólogo
          </h2>

          {!dados ? (
            <p className="text-blue-900">Carregando dados...</p>
          ) : (
            <div className="space-y-4 text-blue-900">
              <p><strong>Nome completo:</strong> {dados.nomeCompleto}</p>
              <p><strong>CPF:</strong> {dados.cpf}</p>
              <p><strong>E-mail:</strong> {dados.email}</p>
              <p><strong>Gênero:</strong> {dados.genero}</p>
              <p><strong>Data de Nascimento:</strong> {dados.dataNascimento}</p>
              <p><strong>CRP:</strong> {dados.crp}</p>
              <p><strong>Senha:</strong> **********</p>
            </div>
          )}

          <div className="mt-8 text-center">
            <Link
              to="/edtPerfilPsicologo"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Editar Perfil
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/edtSenhaPsicologo"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Editar Senha
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeuPerfilPsicologo;

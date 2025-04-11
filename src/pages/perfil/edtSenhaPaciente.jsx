import { useEffect, useState } from "react";
import { alterarSenhaPaciente } from "../../Api";
import { useNavigate } from "react-router-dom";
import NavbarLogado from "../../components/navbarLogado";

function EdtSenhaPaciente() {
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (novaSenha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    try {
      const id = sessionStorage.getItem("usuarioId");
      await alterarSenhaPaciente(id, { senhaAtual, novaSenha });
      setSucesso("Senha atualizada com sucesso!");
      setErro("");
      setSenhaAtual("");
      setNovaSenha("");
      setConfirmarSenha("");
      setTimeout(() => navigate("/perfilPaciente"), 2000);
    } catch (err) {
      setErro(err.message);
      setSucesso("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-100 flex flex-col">
      <NavbarLogado />

      <div className="flex flex-col items-center justify-center flex-1 p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Alterar Senha</h2>

          {erro && <p className="text-red-600 mb-4">{erro}</p>}
          {sucesso && <p className="text-green-600 mb-4">{sucesso}</p>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-blue-900 mb-1">Senha Atual</label>
              <input
                type="password"
                value={senhaAtual}
                onChange={(e) => setSenhaAtual(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-blue-900 mb-1">Nova Senha</label>
              <input
                type="password"
                value={novaSenha}
                onChange={(e) => setNovaSenha(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-blue-900 mb-1">Confirmar Nova Senha</label>
              <input
                type="password"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Salvar Nova Senha
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EdtSenhaPaciente;

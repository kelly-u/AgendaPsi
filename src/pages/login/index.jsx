import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../Api";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", senha: "" });
  const [erro, setErro] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const usuario = await login(form.email, form.senha);
  
      sessionStorage.setItem("usuarioId", usuario.id);
      
      navigate("/consultasAgendadas");
    } catch (error) {
      setErro(error.message);
    }
  };
  

  return (
    <div className="bg-gradient-to-b from-blue-300 to-blue-100 min-h-screen flex flex-col">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="text-xl font-semibold text-blue-900">
              Agenda Psi
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center flex-1 p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">Login</h2>
          {erro && <p className="text-red-500 mb-4">{erro}</p>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-blue-900 mb-1">E-mail</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="seuemail@exemplo.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-blue-900 mb-1">Senha</label>
              <input
                type="password"
                name="senha"
                value={form.senha}
                onChange={handleChange}
                placeholder="Digite sua senha"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Entrar
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-blue-900">Não possui conta?</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link to="/cadastroPaciente" className="text-blue-700 hover:underline">
                Cadastro Paciente
              </Link>
              <Link to="/cadastroPsicologo" className="text-blue-700 hover:underline">
                Cadastro Psicólogo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

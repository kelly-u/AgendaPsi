import { useEffect, useState } from "react";
import { buscarDadosPessoaisPsicologo, editarDadosPessoaisPsicologo } from "../../Api";
import { useNavigate, Link } from "react-router-dom";

function EdtPerfilPsicologo() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nomeCompleto: "",
    cpf: "",
    email: "",
    genero: "",
    dataNascimento: "",
    crp: "",
    senha: ""
  });
  const [erro, setErro] = useState("");

  const psicologoId = sessionStorage.getItem("usuarioId");

  useEffect(() => {
    if (psicologoId) {
      buscarDadosPessoaisPsicologo(psicologoId)
        .then((dados) => {
          setForm({
            nomeCompleto: dados.nomeCompleto || "",
            cpf: dados.cpf || "",
            email: dados.email || "",
            genero: dados.genero || "",
            dataNascimento: dados.dataNascimento || "",
            crp: dados.crp || "",
            senha: "" // não preenche senha
          });
        })
        .catch((err) => {
          console.error("Erro ao carregar dados:", err);
          setErro("Não foi possível carregar os dados do perfil.");
        });
    }
  }, [psicologoId]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editarDadosPessoaisPsicologo(psicologoId, form);
      navigate("/perfilPsicologo");
    } catch (error) {
      setErro(error.message);
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-300 to-blue-100 min-h-screen flex flex-col">
      
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-8">
              <Link to="/indexLogado" className="text-xl font-semibold text-blue-900">Agenda Psi</Link>
              <Link to="/consultasAgendadas" className="text-blue-900 hover:text-blue-600">Consultas</Link>
              <Link to="/agendamentoConsultas" className="text-blue-900 hover:text-blue-600">Agendar Consulta</Link>
              <Link to="/meuPerfil" className="text-blue-900 hover:text-blue-600">Meu Perfil</Link>
            </div>
            <div>
              <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Sair</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* CONTEÚDO */}
      <div className="flex flex-col items-center justify-center flex-1 p-4">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">Edite seu perfil</h2>

          {erro && <p className="text-red-500 mb-4">{erro}</p>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input name="nomeCompleto" value={form.nomeCompleto} onChange={handleChange} placeholder="Nome completo" className="w-full px-4 py-2 border rounded-lg" />
            <input name="cpf" value={form.cpf} onChange={handleChange} placeholder="CPF" className="w-full px-4 py-2 border rounded-lg" />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="E-mail" className="w-full px-4 py-2 border rounded-lg" />
            <select name="genero" value={form.genero} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg">
              <option value="">Selecione o gênero</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Outro</option>
              <option value="Prefiro não informar">Prefiro não informar</option>
            </select>
            <input name="dataNascimento" type="date" value={form.dataNascimento} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
            <input name="crp" value={form.crp} onChange={handleChange} placeholder="CRP" className="w-full px-4 py-2 border rounded-lg" />

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Salvar Alterações
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EdtPerfilPsicologo;

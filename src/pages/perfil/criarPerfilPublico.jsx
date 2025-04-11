import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { criarPerfilPublico } from "../../Api";
import NavbarLogado from "../../components/navbarLogado";

function CriarPerfilPublico() {
  const navigate = useNavigate();
  const psicologoId = sessionStorage.getItem("usuarioId");

  const [form, setForm] = useState({
    especialidade: "",
    abordagem: "",
    tempoExercicio: "",
    urlFoto: "",
    status: "PUBLICO",
  });

  const [horarios, setHorarios] = useState([
    { diaSemana: "", horarioInicio: "", horarioFim: "" },
  ]);

  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const diasSemana = [
    { label: "Segunda-feira", value: "MONDAY" },
    { label: "Terça-feira", value: "TUESDAY" },
    { label: "Quarta-feira", value: "WEDNESDAY" },
    { label: "Quinta-feira", value: "THURSDAY" },
    { label: "Sexta-feira", value: "FRIDAY" },
    { label: "Sábado", value: "SATURDAY" },
    { label: "Domingo", value: "SUNDAY" },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleHorarioChange = (index, field, value) => {
    const novosHorarios = [...horarios];
    novosHorarios[index][field] = value;
    setHorarios(novosHorarios);
  };

  const adicionarHorario = () => {
    setHorarios([...horarios, { diaSemana: "", horarioInicio: "", horarioFim: "" }]);
  };

  const removerHorario = (index) => {
    const novos = horarios.filter((_, i) => i !== index);
    setHorarios(novos);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const perfilDTO = {
        ...form,
        horariosDisponiveis: horarios,
      };

      await criarPerfilPublico(psicologoId, perfilDTO);
      setMensagem("Perfil público criado com sucesso!");
      setErro("");

      setTimeout(() => {
        navigate("/perfilPsicologo");
      }, 2000);
    } catch (e) {
      setErro(e.message);
      setMensagem("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-100 flex flex-col">
      <NavbarLogado />
      <div className="flex flex-col items-center justify-center flex-1 p-4">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            Criar Perfil Público
          </h2>

          {erro && <p className="text-red-500 mb-4 text-center">{erro}</p>}
          {mensagem && <p className="text-green-600 mb-4 text-center">{mensagem}</p>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input name="especialidade" placeholder="Especialidade" className="w-full px-4 py-2 border rounded-lg" value={form.especialidade} onChange={handleChange} required />
            <input name="abordagem" placeholder="Abordagem" className="w-full px-4 py-2 border rounded-lg" value={form.abordagem} onChange={handleChange} required />
            <input name="tempoExercicio" placeholder="Tempo de exercício" className="w-full px-4 py-2 border rounded-lg" value={form.tempoExercicio} onChange={handleChange} required />
            <input name="urlFoto" placeholder="URL da foto" className="w-full px-4 py-2 border rounded-lg" value={form.urlFoto} onChange={handleChange} />

            <h3 className="text-xl font-semibold mt-6 text-blue-900">Horários Disponíveis</h3>
            {horarios.map((horario, index) => (
              <div key={index} className="flex gap-2 items-center mb-2">
                <select
                  value={horario.diaSemana}
                  onChange={(e) => handleHorarioChange(index, "diaSemana", e.target.value)}
                  className="w-1/3 px-3 py-2 border rounded"
                  required
                >
                  <option value="">Dia</option>
                  {diasSemana.map((dia) => (
                    <option key={dia.value} value={dia.value}>
                      {dia.label}
                    </option>
                  ))}
                </select>

                <input
                  type="time"
                  value={horario.horarioInicio}
                  onChange={(e) => handleHorarioChange(index, "horarioInicio", e.target.value)}
                  className="w-1/3 px-3 py-2 border rounded"
                  required
                />
                <input
                  type="time"
                  value={horario.horarioFim}
                  onChange={(e) => handleHorarioChange(index, "horarioFim", e.target.value)}
                  className="w-1/3 px-3 py-2 border rounded"
                  required
                />

                {index > 0 && (
                  <button type="button" onClick={() => removerHorario(index)} className="text-red-600 font-bold">
                    ✕
                  </button>
                )}
              </div>
            ))}

            <button type="button" onClick={adicionarHorario} className="text-blue-700 underline text-sm">
              + Adicionar horário
            </button>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Criar Perfil
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CriarPerfilPublico;

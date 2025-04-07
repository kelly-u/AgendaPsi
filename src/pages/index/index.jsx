import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { listarPsicologosPublicos } from "../../Api";

function Index() {
  const [psicologos, setPsicologos] = useState([]);
  const [aberto, setAberto] = useState(null);

  useEffect(() => {
    listarPsicologosPublicos()
      .then(setPsicologos)
      .catch((error) => {
        console.error("Erro ao buscar psicólogos:", error.message);
      });
  }, []);

  const toggleDetalhes = (id) => {
    setAberto(aberto === id ? null : id);
  };

  return (
    <div className="bg-gradient-to-b from-blue-300 to-blue-100 min-h-screen text-base">
      {/* NAVBAR */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="text-xl font-semibold text-blue-900">
              Agenda Psi
            </Link>
            <div className="flex space-x-6">
              <NavLink to="/login" className="text-blue-900 hover:text-blue-600">Login</NavLink>
              <NavLink to="/cadastroPaciente" className="text-blue-900 hover:text-blue-600">Cadastro Paciente</NavLink>
              <NavLink to="/cadastroPsicologo" className="text-blue-900 hover:text-blue-600">Cadastro Psicólogo</NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* CONTEÚDO */}
      <div className="flex flex-col items-center justify-center text-blue-950 py-20 px-4">
        <h2 className="text-3xl sm:text-4xl text-center">Bem-vindo(a) ao</h2>
        <h1 className="text-5xl sm:text-7xl font-bold mt-4 text-center">Agenda Psi</h1>

        <div className="mt-16 w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Nossos Psicólogos</h2>

          {psicologos.length > 0 ? (
            <ul className="space-y-4">
            {psicologos.map((psicologo, index) => {
              const estaAberto = aberto === index;
          
              return (
                <li key={index} className="border-b border-blue-200 pb-4">
                  <button
                    onClick={() => toggleDetalhes(index)}
                    className="flex items-center text-blue-900 font-medium hover:underline focus:outline-none"
                  >
                    <span className="mr-2 text-blue-900">
                      {estaAberto ? "▼" : "▶"}
                    </span>
                    {psicologo.nomeCompleto}
                  </button>
          
                  {/* Detalhes */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      estaAberto ? "max-h-screen mt-2" : "max-h-0"
                    }`}
                  >
                    {estaAberto && (
                      <div className="ml-6 mt-2 text-sm text-blue-800 space-y-1">
                        <p><strong>Especialidade:</strong> {psicologo.especialidade}</p>
                        <p><strong>Abordagem:</strong> {psicologo.abordagem}</p>
                        <p><strong>Tempo de exercício:</strong> {psicologo.tempoExercicio}</p>
          
                        <div className="mt-2">
                          <strong>Horários disponíveis:</strong>
                          <ul className="list-disc list-inside ml-4">
                            {psicologo.horariosDisponiveis.map((h, hIndex) => (
                              <li key={`${hIndex}-${h.diaSemana}-${h.horarioInicio}`}>
                                {h.diaSemana} — {h.horarioInicio} às {h.horarioFim}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>          
          ) : (
            <p className="text-blue-800">Carregando psicólogos...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;

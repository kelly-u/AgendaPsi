import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: false, 
});

// 
export const login = async (email, senha) => {
  try {
    const response = await api.post("/auth/login", { email, senha });
    return response.data;
  } catch (error) {
    throw new Error("Email ou senha inválidos.");
  }
};

export const cadastrarPaciente = async (paciente) => {
  try {
    await api.post("/pacientes/cadastrar", paciente);
  } catch (error) {
    const msg = error.response?.data || "Erro ao cadastrar paciente.";
    throw new Error(msg);
  }
};

export const cadastrarPsicologo = async (psicologo) => {
  try {
    await api.post("/psicologos/cadastrar", psicologo);
  } catch (error) {
    const msg = error.response?.data || "Erro ao cadastrar psicologo.";
    throw new Error(msg);
  }
};

export const buscarDadosPessoaisPsicologo = async (id) => {
  try {
    const response = await api.get(`/psicologos/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar dados do psicólogo");
  }
};

export const listarPsicologosPublicos = async () => {
    try {
      const response = await api.get("/psicologos/disponiveis");
      return response.data;
    } catch (error) {
      throw new Error("Erro ao buscar psicólogos.");
    }
  };

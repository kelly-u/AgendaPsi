import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true, 
});


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

  export const editarDadosPessoaisPsicologo = async (id, dados) => {
    try {
      const response = await api.put(`/psicologos/${id}/editar-dados`, dados);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao editar dados do psicólogo.");
    }
  };

  export const alterarSenhaPsicologo = async (id, { senhaAtual, novaSenha }) => {
    try {
      await api.patch(
        `/psicologos/${id}/alterar-senha`,
        { senhaAtual, novaSenha },
        { withCredentials: true } 
      );
    } catch (error) {
      const msg = error.response?.data || "Erro ao alterar senha.";
      throw new Error(msg);
    }
  };

  export const agendarConsulta = async (pacienteId, dados) => {
    try {
      const response = await api.post(`/pacientes/${pacienteId}/agendar-consulta`, dados);
      return response.data;
    } catch (error) {
      const msg = error.response?.data?.mensagem || "Erro ao agendar consulta.";
      throw new Error(msg);
    }
  };

  export const buscarConsultasPaciente = async (id) => {
    const response = await api.get(`/pacientes/${id}/consultas`);
    return response.data;
  };
  
  export const buscarConsultasPsicologo = async (id) => {
    const response = await api.get(`/psicologos/${id}/consultas`);
    return response.data;
  };

  export const cancelarConsulta = async (pacienteId, consultaId) => {
    try {
      const response = await api.patch(`/pacientes/${pacienteId}/consultas/${consultaId}/cancelar`);
      return response.data;
    } catch (error) {
      const msg = error.response?.data?.mensagem || "Erro ao cancelar a consulta.";
      throw new Error(msg);
    }
  };
  
  export const buscarHorariosPorConsulta = async (consultaId) => {
    try {
      const response = await api.get(`/pacientes/consultas/${consultaId}/horarios-disponiveis`);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao buscar horários disponíveis para reagendamento.");
    }
  };
  
  export const reagendarConsulta = async (pacienteId, consultaId, dados) => {
    try {
      const response = await api.patch(`/pacientes/${pacienteId}/consultas/${consultaId}/reagendar`, dados);
      return response.data;
    } catch (error) {
      const msg = error.response?.data?.mensagem || "Erro ao reagendar consulta.";
      throw new Error(msg);
    }
  };

  export const marcarConsultaComoRealizada = async (psicologoId, consultaId) => {
    try {
      const response = await api.patch(`/psicologos/${psicologoId}/consultas/${consultaId}/realizar`);
      return response.data;
    } catch (error) {
      const msg = error.response?.data || "Erro ao marcar consulta como realizada.";
      throw new Error(msg);
    }
  };
  
  
  

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/login";
import CadastroPaciente from "./pages/cadastro/cadastroPaciente";
import CadastroPsicologo from "./pages/cadastro/cadastroPsicologo";
import ConsultasAgendadas from "./pages/consultas/consultasAgendadas";
import AgendamentoConsultas from "./pages/consultas/agendamentoConsultas";
import IndexLogado from "./pages/index/indexLogado";
import Index from "./pages/index";
import MeuPerfilPaciente from "./pages/perfil/perfilPaciente";
import MeuPerfilPsicologo from "./pages/perfil/perfilPsicologo";
import EdtPerfilPaciente from "./pages/perfil/edtPerfilPaciente";
import EdtPerfilPsicologo from "./pages/perfil/edtPerfilPsicologo";
import EdtSenhaPsicologo from "./pages/perfil/edtSenhaPsicologo";
import ReagendarConsulta from "./pages/consultas/ReagendarConsulta";


function App() {
  return (
    <BrowserRouter>
      {/* Criação da estrutura de rotas
          Ou seja, cada vez que eu digitar / vai para o cadastro e /login para o login.
      */}
      <Routes>
        {/* Primeira rota */}
        <Route path="/" element={<Index />}></Route>

        {/* Segunda rota e assim em diante */}
        <Route path="/cadastroPaciente" element={<CadastroPaciente />}></Route>

        <Route
          path="/cadastroPsicologo"
          element={<CadastroPsicologo />}
        ></Route>

        <Route path="/login" element={<Login />}></Route>

        <Route
          path="/agendamentoConsultas"
          element={<AgendamentoConsultas />}
        ></Route>

        <Route
          path="/consultasAgendadas"
          element={<ConsultasAgendadas />}
        ></Route>

        <Route path="/indexLogado" element={<IndexLogado />}></Route>

        <Route path="/perfilPaciente" element={<MeuPerfilPaciente />}></Route>

        <Route path="/perfilPsicologo" element={<MeuPerfilPsicologo />}></Route>

        <Route
          path="/edtPerfilPaciente"
          element={<EdtPerfilPaciente />}
        ></Route>

        <Route
          path="/edtPerfilPsicologo"
          element={<EdtPerfilPsicologo />}
        ></Route>

        <Route
          path="/edtSenhaPsicologo"
          element={<EdtSenhaPsicologo />}
        ></Route>

        <Route path="/reagendar-consulta/:consultaId" element={<ReagendarConsulta />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;

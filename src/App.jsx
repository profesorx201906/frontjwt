import "./App.css";
import MenuPpal from "./componentes/Menu";
import Login from "./componentes/Login";
import Logout from "./componentes/Logout";
import ContenidoAdministrador from "./componentes/ContenidoAdministrador";
import ContenidoModerador from "./componentes/ContenidoModerador";
import ContenidoUsuario from "./componentes/ContenidoUsuario";
import ContenidoPublico from "./componentes/ContenidoPublico";
import { HashRouter, Route, Routes } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import NoAutorizado from "./componentes/NoAutorizado";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        

        <HashRouter>
        <MenuPpal />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/noAutorizado" element={<NoAutorizado />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/admin" element={<ContenidoAdministrador />} />
            <Route path="/mod" element={<ContenidoModerador />} />
            <Route path="/user" element={<ContenidoUsuario />} />
            <Route path="/all" element={<ContenidoPublico />} />
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Agendas from './components/Agendas';
import Formulario from './components/Formulario';
import Navbarnew from './components/Navbarnew';
import Registro from './components/Registro';
import Admin from './components/Admin';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<><Navbarnew /><Home /></>} />
        <Route path="/Agendas" element={<><Navbarnew /><Agendas /></>} />
        <Route path="/Formulario" element={<><Navbarnew /><Formulario /></>} />
        <Route path="/Registro" element={<Registro/>}/>
        <Route path="/Administracion" element={<Admin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
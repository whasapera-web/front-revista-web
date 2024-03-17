import Home from './pages/Home/Home';
import Comercios from './pages/Comercios/Comercios';
import Contacto from './pages/Contacto/Contacto';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import UploadAdvesting from "./pages/UploadAdvesting/UploadAdvesting";
import UploadCategor from "./pages/UploadCategor/UploadCategor"
import AdminView from './pages/AdminView/AdminView';
import Nosotros from './pages/Nosotros/Nosotros';
import { UserProvider } from "./context/UserContext";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <UserProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/comercios" element={<Comercios categoriId={1}/>} />
            <Route path="/profecionales-de-bellesa" element={<Comercios categoriId={3}/>} />
            <Route path="/profecionales-de-salud" element={<Comercios categoriId={4}/>} />
            <Route path="/clasificados" element={<Comercios categoriId={5}/>} />
            <Route path="/admin-view" element={<AdminView/>} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/CargarPublicidad" element={<UploadAdvesting />} />
            <Route path="/CargarCategoria" element={<UploadCategor />} />
            <Route path="/nosotros" element={<Nosotros />} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  )
}
export default App

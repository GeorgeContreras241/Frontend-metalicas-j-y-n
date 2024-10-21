import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from "./components/Navbar/Header";
import { Home } from "./Pages/Home/Home";
import { Error } from "./Pages/error/Error"
import { Galeria } from "./Pages/Galeria/Galeria";
import { Servicios } from "./Pages/Servicios/Servicios";
import { Login } from "./Pages/login/Login"
import { Register } from './Pages/register/Register';
import { useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Dashboard } from './Pages/dash/Dashboard'
import { ProtectedRoute } from './ProtectedRoute'
function App() {
  const location = useLocation();

  // Verifica si estamos en la ruta de error (cuando no coincide con ninguna ruta definida)
  const is404Error = !['/', '/Galeria', '/contactanos'].includes(location.pathname);

  return (
    <AuthProvider>
      {/* Muestra el Header si NO estamos en la ruta de error */}
      {!is404Error && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Galeria" element={<Galeria />} />
        <Route path="/contactanos" element={<Servicios />} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />

        <Route element={<ProtectedRoute/>}>
          <Route path='/dashboard' element={<Dashboard></Dashboard>} />
        </Route>

        {is404Error && <Route path="*" element={<Error />} />}
      </Routes>
    </AuthProvider>
  );
}

export default App;




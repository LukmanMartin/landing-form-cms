import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login'; // Asegúrate de proporcionar la ruta correcta a tu componente Login
import Info from './Info'; // Asegúrate de proporcionar la ruta correcta a tu componente Info
import Register from './Register'; // Asegúrate de proporcionar la ruta correcta a tu componente Register
import RequireAuth from './RequiredAuth'; // Asegúrate de propor



const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta de inicio de sesión */}
        <Route path="/login" element={<Login />} />

        {/* Ruta de registro */}
        <Route path="/register" element={<Register />} />

        {/* Ruta protegida por inicio de sesión */}
        <Route path="/info" element={<RequireAuth><Info /></RequireAuth>} />


        {/* Redirigir a la página de inicio de sesión por defecto */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from './AdminLogin'; // Asegúrate de proporcionar la ruta correcta a tu componente AdminLogin
import UserInfo from './UserInfo'; // Asegúrate de proporcionar la ruta correcta a tu componente UserInfo
import RequireAuth from './RequireAuth'; // Asegúrate de proporcionar la ruta correcta a tu componente RequireAuth

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta de inicio de sesión del administrador */}
        <Route path="/adminlogin" element={<AdminLogin />} />

        {/* Ruta protegida por inicio de sesión del administrador */}
        <Route path="/info" element={<RequireAuth><UserInfo /></RequireAuth>} />

        {/* Redirigir a la página de inicio de sesión del administrador por defecto */}
        <Route path="/" element={<Navigate to="/adminlogin" />} />
      </Routes>
    </Router>
  );
};

export default App;

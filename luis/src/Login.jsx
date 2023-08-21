import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from './API'; // Asegúrate de proporcionar la ruta correcta a tu archivo API
import "./Login.css"

const Login = () => {
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [contraseña, setContraseña] = useState('');

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setNuevoNombre(value);
    } else if (name === 'password') {
      setContraseña(value);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/usuarios/login', {
        username: nuevoNombre,
        password: contraseña,
      });

      const { token, userInDb } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userInDb));

      navigate('/info');
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
    }
  };

  return (
    <div className="login-container">
      
      <div className="frase-container">
        <div className='title'>
          <h1>Disfruta una nueva expericencia</h1>
        </div>
        <div className='title-2'>
          <h2>Aprovecha cada dia, no te fies del mañana. Regala y comparte momentos.</h2>
        </div>
      </div>

      <section className="login">
        <form className="formulario">
          <h2>Please login:</h2>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleInput}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleInput}
          />

          <button type="button" className="button-login" onClick={handleLogin}>Login</button>
        </form>
      </section>
    </div>
  );
};


export default Login;

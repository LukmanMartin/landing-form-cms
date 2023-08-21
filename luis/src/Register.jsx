import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { API } from './API'

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    password: '',
    email: '',
    avatar: '',
    añoNacimiento: '',
    ciudad: '',
    imagenPerfil: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post('usuarios/signup', formData);

      console.log('Usuario registrado:', response.data);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };


  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullname" placeholder="Nombre completo" onChange={handleInputChange} />
        <input type="text" name="username" placeholder="Nombre de usuario" onChange={handleInputChange} />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleInputChange} />
        <input type="text" name="email" placeholder="Email" onChange={handleInputChange} />
        <input type="text" name="avatar" placeholder="Avatar URL" onChange={handleInputChange} />
        <input type="number" name="añoNacimiento" placeholder="Año de nacimiento" onChange={handleInputChange} />
        <input type="text" name="ciudad" placeholder="Ciudad" onChange={handleInputChange} />
        <input type="text" name="imagenPerfil" placeholder="URL de la imagen de perfil" onChange={handleInputChange} />

        <button type="submit">Registrarse</button>
        <Link to="/login">Ir a la página de inicio de sesión</Link>
      </form>
    </div>
  );
};

export default Register;

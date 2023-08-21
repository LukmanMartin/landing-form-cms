import React, { useEffect, useState } from 'react';
import { API } from './API'; // Asegúrate de proporcionar la ruta correcta a tu archivo API
import SearchBar from './SearchBar';
import './UserInfo.css'

const UserInfo = () => {
  const [users, setUsers] = useState([]);
  const [filterWord, setFilterWord] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await API.get('/usuarios');
        setUsers(response.data.data.user);
      } catch (error) {
        console.error('Error al obtener la información de los usuarios:', error);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.ciudad.toLowerCase().includes(filterWord)
  );

  return (
    <div className="user-info-container">
      <h2 className="info-title">Información de Usuarios</h2>
      <SearchBar setFilterWord={setFilterWord} />
      <ul className="user-list">
        {filteredUsers.map((user) => (
          <li key={user._id} className="user-item">
            <p className="user-details">
              <span className="user-field">Nombre:</span> {user.username}, 
              <span className="user-field"> Email:</span> {user.email}, 
              <span className="user-field"> Año de Nacimiento:</span> {user.añoNacimiento}, 
              <span className="user-field"> Ciudad:</span> {user.ciudad}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserInfo;

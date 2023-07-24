import React, { useState } from 'react';
import '../style/editPlayer.css'; 

const EditPlayerForm = () => {
  const [name, setName] = useState('ilham');
  const [username, setUsername] = useState('ilham');
  const [email, setEmail] = useState('ilham@yaho.com');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data yang diubah oleh pengguna, misalnya: kirim data ke server
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Email:', email);
  };

  return (
    <div className="edit-player-container">
      <h2>Edit Player</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nama:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan nama"
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Masukkan username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan email"
          />
        </div>
        <button type="submit" className="submit-button">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditPlayerForm;


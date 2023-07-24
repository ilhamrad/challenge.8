import React, { useState } from "react";
import "../style/newPlayer.css";

const NewPlayer = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // melakukan sesuatu dengan data yang diisi oleh pengguna, contoh: kirim data ke server
    console.log("Name:", name);
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    // Simpan data yang diisi dari pengguna untuk jadi satu elemen HTML baru
    const newDataElement = (
      <div className="submitted-data">
        <h2>Submitted Data:</h2>
        <p>Name: {name}</p>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
      </div>
    );
    setSubmittedData(newDataElement);

    // Reset form setelah submit
    setName("");
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const handleReset = () => {
    // Reset button
    setName("");
    setUsername("");
    setEmail("");
    setPassword("");
    setSubmittedData(null);
  };

  return (
    <div className="container">
      <h1>Create New Player</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nama:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan nama" />
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Masukkan username" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan email" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan password" />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>

      {/* Tampilkan data yang di-submit jika sudah ada */}
      {submittedData}
    </div>
  );
};

export default NewPlayer;

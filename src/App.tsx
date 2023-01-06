import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container-header">
      <header className="header">
        <h1>Jogo da velha!</h1>
        <p>by alice and mari</p>
      </header>
      <div className="board">
        <div className="campo">😭</div>
        <div className="campo">❤️</div>
        <div className="campo">😭</div>
        <div className="campo">😭</div>
        <div className="campo">😍</div>
        <div className="campo">😭</div>
        <div className="campo">😭</div>
        <div className="campo">😭</div>
        <div className="campo">😭</div>
      </div>
    </div>
  );
}

export default App;

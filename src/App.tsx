import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const boardVazio = Array(9).fill("");
  const [board, setBoard] = useState(boardVazio);
  const [jogadorAtual, setJogadorAtual] = useState("O");
  const [ganhador, setGanhador] = useState("");
  const [isEmpate, setIsEmpate] = useState(false);

  const campoOnClick = (index: any) => {
    if(ganhador) return null;

    if(board[index] !== "") return null;

    setBoard(
      board.map((item, itemIndex) => itemIndex === index ? jogadorAtual : item)
    );
    
    setJogadorAtual(jogadorAtual === "X" ? "O" : "X");
  }

  const verificaEmpate = () => {
    if(board.every(campo => campo !== "") && ganhador === "") {
      setIsEmpate(true)
    }
  }

  const verificaGanhador = () => {
    const maneirasDeGanhar = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],

      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],

      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];

    maneirasDeGanhar.forEach(maneira => {
      if(maneira.every(campo => campo === "O")){
        setGanhador("O");
        setIsEmpate(false);
      } 
      if(maneira.every(campo => campo === "X")){
        setGanhador("X");
        setIsEmpate(false);
      } 
    })
  }

  useEffect(verificaGanhador, [board, ganhador]);
  useEffect(verificaEmpate, [board, ganhador]);

  const recomecarJogo = () =>{
    setJogadorAtual(ganhador);
    setBoard(boardVazio);
    setGanhador("");
    setIsEmpate(false)
  }

  return (
    <div className="container-header">
      <header className="header">
        <h1>Jogo da velha!</h1>
        <p>by alice and mari</p>
      </header>

      <div className={`board ${ganhador ? "jogo-finalizado" : ""}`}>
        {board.map((item, index) =>
          <div 
            key={index} 
            className={`campo ${item}`}
            onClick={() => campoOnClick(index)}
          > 
            {item}
          </div>
        )}
      </div>
      {(ganhador || isEmpate) &&
        <footer className="mensagem-ganhador">
          {(isEmpate ? 
            <h2>Empate!</h2>
          :
            <h2>{ganhador} venceu!</h2>)
          }
          <button onClick={recomecarJogo}>Recomeçar o jogo</button>
        </footer>
      }
    </div>
  );
}

export default App;

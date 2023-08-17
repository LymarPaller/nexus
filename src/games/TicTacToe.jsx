import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faSadTear, faMeh } from '@fortawesome/free-solid-svg-icons';
import xImage from '../assets/games-gallery/tic-tac-toe-x.png';
import oImage from '../assets/games-gallery/tic-tac-toe-o.png';
import '../styles/gameslayout/TicTacToe.scss';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [xPlayer, setXPlayer] = useState(true);
  const [oPlayer, setOPlayer] = useState(false);
  const [winner, setWinner] = useState(null);

  const [showCelebration, setShowCelebration] = useState(false);
  const [showLose, setShowLose] = useState(false);

  useEffect(() => {
    if (!isXNext && !winner) {
      setTimeout(() => {
        makeComputerMove();
      }, 500); // Add a delay to simulate computer "thinking"
    }
  }, [isXNext, winner]);

  useEffect(() => {
    if (winner === 'X') {
      setShowCelebration(true);
      setTimeout(() => {
        setShowCelebration(false);
      }, 2000); // Display celebration for 2 seconds
    } else if (winner === 'O') {
      setShowLose(true);
    } else {
      setShowLose(false);
    }
  }, [winner]);

  const handleClick = (index) => {
    if (board[index] === null && isXNext && !winner) {
      const newBoard = [...board];
      newBoard[index] = 'X';
      setBoard(newBoard);
      setIsXNext(false);
      checkWinner(newBoard);
    }
  };

  const makeComputerMove = () => {
    const emptySquares = board.reduce((acc, curr, index) => {
      if (!curr) {
        acc.push(index);
      }
      return acc;
    }, []);

    if (emptySquares.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptySquares.length);
      const newBoard = [...board];
      newBoard[emptySquares[randomIndex]] = 'O';
      setBoard(newBoard);
      setIsXNext(true);
      checkWinner(newBoard);
    }
  };

  const checkWinner = (currentBoard) => {
    const winner = calculateWinner(currentBoard);
    if (winner) {
      setWinner(winner);
    }
  };

  const handlePlayAgain = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setIsXNext(true);
  };

  const renderSquare = (index) => {
    const value = board[index];
    const playerImage = value === 'X' ? xImage : oImage;
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {value && <img src={playerImage} alt={value} />}
      </button>
    );
  };

  const isDraw = board.every((square) => square !== null);
  const isGameOver = winner || isDraw;

  const status = isGameOver
    ? winner === 'X'
      ? `Winner: ${winner}`
      : showLose
      ? 'You Lose!'
      : "It's a draw!"
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="tic-tac-toe">
      <div className="board">
        {Array(9)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="square-container">
              {renderSquare(index)}
            </div>
          ))}
      </div>
      <div className="status">{status}</div>
      <div className="options">
        <label>
          Play as X:
          <input
          className='x-input'
            type="checkbox"
            checked={xPlayer}
            onChange={() => {
              setXPlayer(!xPlayer);
              setOPlayer(!oPlayer);
              setIsXNext(true);
              setBoard(Array(9).fill(null));
              setWinner(null);
            }}
          />
         
          Computer as O:
          <input
          className='o-input'
            type="checkbox"
            checked={oPlayer}
            onChange={() => {
              setOPlayer(!oPlayer);
              setXPlayer(!xPlayer);
              setIsXNext(false);
              setBoard(Array(9).fill(null));
              setWinner(null);
            }}
          />
        </label>
      </div>
      {isGameOver && (
        <div className={`result ${showCelebration ? 'celebrate' : ''}`}>
          {winner === 'X' && (
            <>
              <p>You Win!</p>
              <FontAwesomeIcon icon={faCrown} size="2x" />
            </>
          )}
          {showLose && (
            <>
              <p>You Lose!</p>
              <FontAwesomeIcon icon={faSadTear} size="2x" />
            </>
          )}
          {!winner && !showLose && (
            <>
              <p>It's a draw!</p>
              <FontAwesomeIcon icon={faMeh} size="2x" />
            </>
          )}
          <button className="play-again" onClick={handlePlayAgain}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default TicTacToe;

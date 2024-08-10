import { useState } from 'react';
import {GameLayout} from "./GameLayout";
import PropTypes from "prop-types";

export const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [winArr, setWinArr] = useState([]);
  const [field, setField] = useState(
    [
      '', '', '',
      '', '', '',
      '', '', '',
    ]
  );

  const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
  ];

	return <GameLayout
    currentPlayer={currentPlayer}
    setCurrentPlayer={setCurrentPlayer}
    isGameEnded={isGameEnded}
    setIsGameEnded={setIsGameEnded}
    isDraw={isDraw}
    setIsDraw={setIsDraw}
    field={field}
    setField={setField}
    winArr={winArr}
    setWinArr={setWinArr}
    WIN_PATTERNS={WIN_PATTERNS}
  />
};

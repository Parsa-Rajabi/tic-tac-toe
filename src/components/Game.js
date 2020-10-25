import React , { useState} from 'react';
import {calculateWinner} from "../helper";
import Board from './Board';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext]= useState(true);
    //check if winner is winner or not
    const winner = calculateWinner(board);

    const handleClick = () => {

    }

    const jumpTo = () => {

    }

    const renderMoves = () => {

    }

    return (
        <Board squares = {board} onClick={handleClick} />
    )
};

export default Game;
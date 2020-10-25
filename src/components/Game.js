import React , { useState} from 'react';
import {Button} from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import {calculateWinner} from "../helper";
import Board from './Board';

const styles = {
    width: '200px',
    margin: '20px auto',
}
const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    //check if winner is winner or not
    const winner = calculateWinner(board);

    const handleClick = i => {
        //create a shallow (using ...) copy of the board
        const boardCopy = [...board]
        // if user clicks on occupied square or if game is won, return
        if (winner || boardCopy[i]) return;
        // Put an X or an O in the clicked square
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);

    }

    const renderMoves = () => (
        <Button color = "secondary" variant="outlined" size="Large" onClick={() => setBoard(Array(9).fill(null))}>
            Reset Game
            </Button>
    )

    return (
        <>
            <Alert variant="filled" severity="success">
                Welcome to Tic Tac Toe
            </Alert>
            <Board squares={board} onClick={handleClick}/>
            <div style={styles}>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </>
    )
}

export default Game;
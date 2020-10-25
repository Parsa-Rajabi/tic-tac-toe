import React from 'react';
import Square from './Square';

const Board = ({Squares, onClick}) => (
    <div>
        <Square value="1" onClick={() => onClick("X")} />
        <Square value="2" onClick={() => onClick("X")} />
        <Square value="3" onClick={() => onClick("X")} />
        <Square value="4" onClick={() => onClick("X")} />
        <Square value="5" onClick={() => onClick("X")} />
        <Square value="6" onClick={() => onClick("X")} />
        <Square value="7" onClick={() => onClick("X")} />
        <Square value="8" onClick={() => onClick("X")} />


    </div>
);

export default Board;
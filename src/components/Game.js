import React, { useState } from "react";
import Board from "./Board";
import calculateWinner from "../helpers";
import Button from "react-bootstrap/Button";

const styles = {
    width: "200px",
    margin: "20px auto",
};

export default function Game() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(board);

    const handleClick = i => {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    };

    const renderMoves = () => (
        <Button onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </Button>
    );

    return (
        <>
            <Board squares={board} onClick={handleClick} />

            <div style={styles}>
                <p>
                    {winner
                        ? "Winner: " + winner
                        : "Next Player: " + (xIsNext ? "X" : "O")}
                </p>

                {renderMoves()}
            </div>
        </>
    );
}

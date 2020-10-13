import React from "react";
import Square from "./Square";
const style = {
    border: "4px solid darkblue",
    borderRadius: "10px",
    width: "50vh",
    height: "50vh",
    margin: "0 auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

export default function Board(props) {
    return (
        <div style={style}>
            {props.squares.map((square, i) => (
                <Square
                    key={i}
                    value={square}
                    onClick={() => props.onClick(i)}
                />
            ))}
        </div>
    );
}

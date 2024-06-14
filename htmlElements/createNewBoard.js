import { boardSize } from "../constants.js";

export const createNewBoard = () => {
    const cardElement = document.querySelector(".card");
    const newBoard = document.createElement("button");
    newBoard.classList.add("board");
    newBoard.style.left = "20px";
    newBoard.style.height = boardSize.height + "px";
    newBoard.style.width = boardSize.width + "px";
    cardElement.appendChild(newBoard);
    return newBoard;
};

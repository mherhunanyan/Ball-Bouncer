import { ballSize } from "../constants.js";

export const createNewBall = () => {
    const cardElement = document.querySelector(".card");
    const newBall = document.createElement("span");
    newBall.style.height = ballSize.height + "px";
    newBall.style.width = ballSize.width + "px";
    newBall.classList.add("ball");
    newBall.style.top = "20px";
    newBall.style.left = "20px";
    cardElement.appendChild(newBall);
    return newBall;
};

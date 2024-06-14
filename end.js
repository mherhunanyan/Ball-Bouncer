import { keyDownHandler } from "./eventHandlers/keyDownHandler.js";
import { minPoints } from "./constants.js";
import { newGame } from "./newGame.js";

export const end = () => {
    const points = +document.querySelector(".points").textContent;
    const timerPointsContainer = document.querySelector(
        ".timer-points-container"
    );
    const userStatus = document.createElement("div");
    userStatus.classList.add("userStatus");
    if (points > minPoints) {
        userStatus.innerHTML = "You are win";
        userStatus.style.color = "green";
        timerPointsContainer.appendChild(userStatus);
        newGame();
    } else {
        userStatus.innerHTML = "You are lose";
        userStatus.style.color = "red";
        timerPointsContainer.appendChild(userStatus);
        newGame();
    }
    document.removeEventListener("keydown", keyDownHandler);
};

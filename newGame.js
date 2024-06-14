import { store } from "./helper/store.js";
import { app } from "./app.js";

export const newGame = () => {
    const card = document.querySelector(".card");
    const timerPointsContainer = document.querySelector(
        ".timer-points-container"
    );
    const newGame = document.createElement("button");
    newGame.classList.add("newGame");
    newGame.innerHTML = "new Game";
    timerPointsContainer.appendChild(newGame);
    newGame.addEventListener("click", () => {
        card.remove();
        timerPointsContainer.remove();
        store.startCalled = false;
        app();
    });
};

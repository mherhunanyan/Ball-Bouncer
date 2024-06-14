import { createTimerPointsContainer } from "./createTimerPointsContainer.js";
import { createNewBoard } from "./createNewBoard.js";
import { createNewCard } from "./createNewCard.js";
import { createPoints } from "./createPoints.js";
import { createTimer } from "./createTimer.js";

export const createInitialElements = () => {
    const container = document.querySelector(".container");
    const newCard = createNewCard();
    const timerPointsContainer = createTimerPointsContainer();
    const newTimer = createTimer();
    const points = createPoints();
    timerPointsContainer.appendChild(newTimer);
    timerPointsContainer.appendChild(points);
    container.append(timerPointsContainer);
    const newBoard = createNewBoard();
    return { timerPointsContainer, newTimer, points, newBoard, newCard };
};

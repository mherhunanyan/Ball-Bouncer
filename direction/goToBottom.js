import { ballSize, boardSize, cardSize, speedBall } from "../constants.js";
import { countEarnedPoint } from "../helper/countEarnedPoint.js";

export const goToBottom = (element) => {
    const boardElement = document.querySelector(".board");
    const points = document.querySelector(".points");

    const intervalId = setInterval(() => {
        let countTop = parseInt(element.style.top) || 0;
        const boardLeft = parseInt(boardElement.style.left) || 0;
        const elementLeft = parseInt(element.style.left) || 0;
        const bottomBound = cardSize.height - ballSize.height;
        const textContentPoints = parseInt(points.textContent);

        if (countTop < bottomBound + 30) {
            if (
                elementLeft >= boardLeft - 15 &&
                elementLeft <= boardLeft + boardSize.width + 5 &&
                countTop >= bottomBound - boardSize.height + 5
            ) {
                const earnedPoint = countEarnedPoint(element);
                points.innerHTML = textContentPoints + earnedPoint;
                element.remove();
                clearInterval(intervalId);
            }
            countTop += 10;
            element.style.top = countTop + "px";
        } else {
            element.remove();
            clearInterval(intervalId);
        }
    }, speedBall.bottom);
};

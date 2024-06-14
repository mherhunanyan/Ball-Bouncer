import { randomGenerateColor } from "./helper/randomGenerateColor.js";
import { createNewBall } from "./htmlElements/createNewBall.js";
import { countBallPlace } from "./helper/countBallPlace.js";
import { countBallPoint } from "./helper/countBallPoint.js";
import { goToBottom } from "./direction/goToBottom.js";
import { countTimer } from "./helper/countTimer.js";
import { colors, finalTime } from "./constants.js";
import { end } from "./end.js";

export const start = () => {
    console.log("start");
    const timerId = countTimer();
    let ballGenerationIntervalId;
    const dynamicBallCreatorId = setInterval(() => {
        ballGenerationIntervalId = setInterval(() => {
            const newBall = createNewBall();
            newBall.style.backgroundColor = randomGenerateColor(colors);
            countBallPoint(newBall);
            countBallPlace(newBall);
            goToBottom(newBall);
        }, 1000);
        setTimeout(() => {
            clearInterval(ballGenerationIntervalId);
        }, 3000);
    }, 5000);

    setTimeout(() => {
        console.log("end");
        end();
        clearInterval(timerId);
        clearInterval(dynamicBallCreatorId);
        clearInterval(ballGenerationIntervalId);
    }, finalTime);
};

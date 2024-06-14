import { getRandomNumber } from "./getRandomNumber.js";
import { ballSize, cardSize } from "../constants.js";

export const countBallPlace = (element) => {
    let countLeft = parseInt(element.style.left) || 0;
    countLeft = getRandomNumber(20, cardSize.width + 20 - ballSize.width);
    element.style.left = countLeft + "px";
};

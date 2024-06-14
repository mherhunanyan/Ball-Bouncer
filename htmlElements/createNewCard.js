import { cardSize } from "../constants.js";

export const createNewCard = () => {
    const container = document.querySelector(".container");
    const newCard = document.createElement("button");
    newCard.classList.add("card");
    newCard.style.width = cardSize.width + "px";
    newCard.style.height = cardSize.height + "px";
    container.appendChild(newCard);
    return newCard;
};

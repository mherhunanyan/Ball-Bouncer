import { createInitialElements } from "./htmlElements/createInitialElements.js";
import { keyDownHandler } from "./eventHandlers/keyDownHandler.js";

export const app = () => {
    createInitialElements();
    document.addEventListener("keydown", keyDownHandler);
};

app();

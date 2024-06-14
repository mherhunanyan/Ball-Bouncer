export const createTimer = () => {
    const newTimer = document.createElement("span");
    newTimer.classList.add("timer");
    newTimer.innerHTML = "02:00";
    return newTimer;
};

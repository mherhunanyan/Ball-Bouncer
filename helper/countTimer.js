export const countTimer = () => {
    const timer = document.querySelector(".timer");

    return setInterval(() => {
        const timerTextContent = timer.textContent;
        let currentHour = +timerTextContent[0].concat(timerTextContent[1]);
        let currentSecond = +timerTextContent[3].concat(timerTextContent[4]);
        if (timerTextContent[3] === "0" && timerTextContent[4] === "0") {
            if (currentHour > 0) {
                currentHour--;
                currentSecond = 60;
            }
        }
        currentSecond--;
        if (currentHour < 10) {
            timer.innerHTML = `0${currentHour}:`;
        } else {
            timer.innerHTML = `${currentHour}`;
        }
        if (currentSecond < 10) {
            timer.innerHTML += `0${currentSecond}`;
        } else {
            timer.innerHTML += `${currentSecond}`;
        }
    }, 1000);
};

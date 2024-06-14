export const countBallPoint = (ball) => {
    if (ball.style.backgroundColor === "black") {
        ball.textContent = 5;
    } else if (ball.style.backgroundColor === "blue") {
        ball.textContent = 10;
    } else if (ball.style.backgroundColor === "red") {
        ball.textContent = 15;
    }
};

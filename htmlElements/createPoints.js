export const createPoints = () => {
    const pointsElement = document.createElement("span");
    pointsElement.classList.add("points");
    pointsElement.innerHTML = "00";
    return pointsElement;
};

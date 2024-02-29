const h1 = document.querySelector("h1");
const btn = document.querySelector("button");

function generateRandomRgb() {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r},${g},${b})`;
}

btn.addEventListener('click', () => {
    const newColor = generateRandomRgb(); 

    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
});
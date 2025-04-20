/**
 * Project Requirements
 * - Change the background color by generating a random RGB color on button click
 */

// Step 1 - create onload handler
window.onload = () => {
    main();
}

function main() {
    const root = document.getElementById('root');
    const button = document.getElementById('change-color');

    button.addEventListener('click', function() {
        const bgColor = generateRGBColor();
        root.style.backgroundColor = bgColor;
        console.log(bgColor);
    });
}

// Step 2 - random color generator function
function generateRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Project Requirements
 * - Change the background color by generating a random RGB color on button click
 * - Also display the hex code to a disabled input field
 */

// Step 1 - create onload handler
window.onload = () => {
    main();
}

function main() {
    const root = document.getElementById('root');
    const button = document.getElementById('btn');
    const output = document.getElementById('output');

    button.addEventListener('click', function(){
        const bgColor = generateHexColor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    });
    
}

// Step 2 - random color generator function
function generateHexColor(){
    const hex = Math.random().toString(16).substring(2, 8);
    return `#${hex}`;
}



// Step 3 - collect all necessary elements

// Step 4 - handle the click event
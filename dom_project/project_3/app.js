/**
 * Project Requirements
 * - Change the background color by generating a random RGB color on button click
 * - Also display the hex code to a disabled input field
 * - Add a button to copy the color code
 */

// Step 1 - create onload handler
window.onload = () => {
    main();
}

function main() {
    const root = document.getElementById('root');
    const changeBtn = document.getElementById('change-btn');
    const output = document.getElementById('output');
    const copyBtn = document.getElementById('copy-btn');

    changeBtn.addEventListener('click', function(){
        const bgColor = generateHexColor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    });

    copyBtn.addEventListener('click', function(){
        navigator.clipboard.writeText(output.value).then(() => {
            copyBtn.innerText = 'Copied!';
            setTimeout(() => {
                copyBtn.innerText = 'Copy';
            }, 1500);
        });
    }).catch((err => {
        console.error("Failed to copy: ", err);
    }));
    
}

// Step 2 - random color generator function
function generateHexColor(){
    const hex = Math.random().toString(16).substring(2, 8);
    return `#${hex}`;
}



// Step 3 - collect all necessary elements

// Step 4 - handle the change button click event

// Step 5 - handle the copy button click event
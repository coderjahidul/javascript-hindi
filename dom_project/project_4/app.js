/**
 * Project Requirements
 * - Change the background color by generating a random RGB color on button click
 * - Also display the hex code to a disabled input field
 * - Add a button to copy the color code
 * - Add a toast message when copied
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
            generateToastMessage(`${output.value} copied`);
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

// Step 7 - create a dynamic toast message
function generateToastMessage(message) {
    const div = document.createElement('div');
    div.innerText = message;
    div.className = 'toast-message';
    document.body.appendChild(div);

    // Force a reflow, then add the animation class
    requestAnimationFrame(() => {
        div.classList.add('toast-message-slide-in');
    });

    setTimeout(() => {
        div.classList.remove('toast-message-slide-in');
        div.classList.add('toast-message-slide-out');

        setTimeout(() => {
            div.remove();
        }, 500); // duration of slide-out animation
    }, 1500);
}


// Step 3 - collect all necessary elements

// Step 4 - handle the change button click event

// Step 5 - handle the copy button click event

// Step 6 - active toast message

// Step 7 - create a dynamic toast message

// Step 8 - clear the toast message
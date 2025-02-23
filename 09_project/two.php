<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript Project</title>
</head>
<body>
    <h1>Chai aut Javascript</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
</body>
<script>
    
    // setInterval(function(){
    //     console.log("Hello World", Date.now());
    // }, 2000);

    // const sayDate = function(){
    //     console.log("Hello World", Date.now());
    // }

    // const intervalId = setInterval(sayDate, 1000);
    
    // document.querySelector('#stop').addEventListener('click', function(){
    //     // start interval
    //     clearInterval(intervalId);
    // });

    // Generate a random number
    const randomColor = function(){
        const hex = "123456789abcdef";
        let color = "#";

        for(i = 0; i < 6; i++){
            color += hex[Math.floor(Math.random() * 16)];
        }

        return color;
    }
    // randomColor();
    // set background color
    // document.body.style.backgroundColor = randomColor();

    // change color
    function changeColor(){
        document.body.style.backgroundColor = randomColor();
    }
    
    // Global variable
    let IntervalId;

    // start Change background color
    const startChangeColor = function(){
        if(!IntervalId){
            IntervalId = setInterval(changeColor, 500);
        }
    }

    // stop Change background color
    const stopChangeColor = function(){
        clearInterval(IntervalId);
        IntervalId = null;
    }

    // stop interval
    document.querySelector('#stop').addEventListener('click', stopChangeColor);

    // Start interval
    document.querySelector('#start').addEventListener('click', startChangeColor);
</script>
</html>
 
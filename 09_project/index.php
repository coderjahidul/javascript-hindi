<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript Project</title>
</head>
<body>
    <h1>Chai aut code</h1>
    <button id="stop">Stop</button>
</body>
<script>
    // setTimeout(function(){
    //     alert('Jahidul Islam');
    // }, 2000);

    const sayJahidul = function(){
        console.log('Jahidul Islam');
    }
    setTimeout(sayJahidul, 2000);

    const text_change = function(){
        document.querySelector('h1').innerHTML = 'Best Web Series';
    }
    const changeMe = setTimeout(text_change, 2000);

    document.querySelector('#stop').addEventListener('click', function(){
        clearTimeout(changeMe);
        console.log('Stopped');
    });

    // document.querySelector('h1').innerHTML = "Best Javascript Series";

    
</script>
</html>

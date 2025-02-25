<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Request</title>
</head>
<body>
    <h1>API Request</h1>
</body>
<script>
    const requestUrl = 'https://api.github.com/users/coderjahidul';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl);
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState);

        if(xhr.readyState == 4){
            const data = JSON.parse(xhr.responseText);
            console.log(typeof(data));
            console.log(data.name);
            
        }
    }
    xhr.send();
</script>
</html>
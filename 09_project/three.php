<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="project">
        <div id="insert">
            <div class="key">Press the key and watch magic</div>
        </div>
    </div>
</body>
<script>
    const insert = document.getElementById('insert');
    window.addEventListener('keydown', function(e){
        insert.innerHTML = `
        <div class="key">
        <table>
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
                <th>Code</th>
            </tr>
            <tr></tr>
                <td>${e.key === ' ' ? 'Space' : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
        `
    });
</script>
</html>
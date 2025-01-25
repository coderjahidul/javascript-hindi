const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function (button){
  // console.log(button)
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    const color = e.target.id;
    switch(color){
      case "grey":
        console.log("Selected Color is Gray");
        body.style.backgroundColor = color;
        break;
      case "white":
        console.log("Selected color is White");
        body.style.backgroundColor = color;
        break;
      case "blue":
        console.log("Selected Color is blue");
        body.style.backgroundColor = color;
        break;
      case "yellow":
        console.log("Selected Color is Yellow");
        body.style.backgroundColor = color;
        break;
      case "red":
        console.log("Selected Color is Red");
        body.style.backgroundColor = color;
        break;
      default:
        console.log("Sorry, we don't have that color");
    }
  });
});

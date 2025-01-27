# Project related to DOM

## project link 
[click here](https://grocoder.com)

# Solution Code 

## Project 3

```javascript
const clock = document.getElementById('clock');
// document.querySelector('#clock');

setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();

}, 1000);
```
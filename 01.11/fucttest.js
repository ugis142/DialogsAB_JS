
function myGreeting() {
    alert('hello');
}
const myGreeting_anonymous = function() {
    alert('hello');
}
//myGreeting();
//myGreeting_anonymous();

const myButton = document.querySelectorAll('button');
myButton.forEach(onclick = function (value, index, array) {
    console.log(array);
    alert('hello from selector (all buttons)')
}

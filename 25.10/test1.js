
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";

// for ( ; ; )

for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
  // text = text +cars[i] + "<br>";
  // i++ -> i += 1 -> i = i +1
}



document.getElementById("demo").innerHTML = text; 
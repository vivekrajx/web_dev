var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var h3 = document.querySelector("h3");
var surprise = document.getElementById("colorrandom");

function setGradient(){

  body.style.background = "linear-gradient(to right, "
   + color1.value + ", " + color2.value + ")";

   h3.textContent = body.style.background + ";";

}
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

surprise.addEventListener("click", getRandomColors);
// we didn't call the function setGradient() REMEMBER CALLBACK FUNCTION


//generate random color background
var colorOne;
var colorTwo;
function getRandomColors() {
  var characters = "0123456789ABCDEF";
   colorOne = '#';
   colorTwo = '#'


  for (var i = 0; i < 6; i++) {
    colorOne += characters[getRandomNumber(0, 15)];
    colorTwo += characters[getRandomNumber(0, 15)];
  }
  console.log(colorOne);
  console.log(colorTwo);
  /*return colorOne,colorTwo;*/

  body.style.background = "linear-gradient(to right, "
   + colorOne + ", " + colorTwo + ")";

   h3.textContent = body.style.background + ";";
}

function getRandomNumber(low, high) {
  var r = Math.floor(Math.random() * (high - low + 1)) + low;
  return r;
}

/*function setRandomColor(colorOne,colorTwo){
  getRandomColors();
  colorOne;
  colorTwo;
  body.style.background = "linear-gradient(to right, "
   + colorOne.value + ", " + colorTwo.value + ")";

   h3.textContent = body.style.background + ";";

}*/

setTimeout(function(){
  document.querySelector("body");
},5000);

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1; // range : 1 -6

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1; // range : 1 -6

var img = document.querySelectorAll("img");
img[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
img[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

var heading = document.querySelector("h1");
if (randomNumber1 === randomNumber2) {
  heading.textContent = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  heading.textContent = "🚩Player 1 wins!";
} else {
  heading.textContent = "Player2 wins!🚩";
}

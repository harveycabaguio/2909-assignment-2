/*jslint strict: false */
var guess;
var low = 0;
var high = 1022;

var guessNum = document.getElementById("guessNum");
var msg = document.getElementById("msg");
var theGuess = document.getElementById("theGuess");

function processResult(code, message, guessNo) {
  if (code === 0 ||
      guessNo > 11) {
    clearInterval(interval);
  }
  if (code === 1) {
    // guess is more than assigned
    high = guess - 1;
  }
  if (code === -1) {
    // guess is less than assigned
    low = guess + 1;
  }
  
  // show in html
  guessNum.innerHTML = "Guess Number: " + guessNo;
  msg.innerHTML = "" + message;
  theGuess.innerHTML = "Guess: " + guess;
  
  guess = Math.floor((low + high) / 2);
}

function init() {
  // remove old script element
  var element = document.getElementById("script");
  element.parentNode.removeChild(element);
  
  // create new script element
  var script = document.createElement("script");
  script.setAttribute("src", ("http://acstomcat.acs.uwinnipeg.ca:8080/A2Server/NumberGuess?snum=3063135&callback=processResult&guess=" + guess));
  script.setAttribute("id", "script");
  document.getElementsByTagName("body")[0].appendChild(script);
}

var interval = setInterval(function () { init(); }, 1000);
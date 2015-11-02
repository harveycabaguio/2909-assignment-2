var canvas = document.getElementById("ballBound");
var context = canvas.getContext("2d");
var r = 29;
var fps = 40;

'use strict';

function init() {
  // remove old script element
  var element = document.getElementById("script");
  element.parentNode.removeChild(element);
  
  // create new script element
  var script = document.createElement("script");
  script.setAttribute("id", "script");
  script.setAttribute("src", "http://acstomcat.acs.uwinnipeg.ca:8080/A2Server/GetBallCoords?callback=test");
  document.getElementsByTagName("head")[0].appendChild(script);
}

window.onload = function () {
  setInterval(init, (1000 / fps));
};

function test(json) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.arc(json.x, json.y, r, 0, 2 * Math.PI);
  context.lineWidth = 10;
  context.strokeStyle = "#880000";
  context.stroke();
  context.fillStyle = "#ff0000";
  context.fill();
  //console.log("X: " + obj.x + " Y: " + obj.y);
}
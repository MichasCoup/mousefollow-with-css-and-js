var Blur = function() {

 var mouseX, mouseY;

 // Nimm die letze Position auf
 var _init = function() {
   mouseX = 0;
   mouseY = 0;
   mouseMove();
 }


// wenn Maus sich bewegt ...
 var mouseMove = function() {
  window.addEventListener('mousemove', getMousePos, false);
 }

// ... hole die Position der Maus
 var getMousePos = function(e) {
  e = e || window.event;
  mouseX = e.pageX;
  mouseY = e.pageY;

// gib die Mausposition aus
  console.log(mouseX + " " + mouseY);
 }

// Gib die Position zurück
 return {
  init: _init
 }
}();

Blur.init();

var BlurAnimation = function() {

  var mouseX, mouseY, textX, textY;

  var _init = function() {
    mouseX    = 0;
    mouseY    = 0;
    slider    = document.getElementsByTagName('body');
    textX     = document.getElementsByClassName('blur')[0];
    textY     = document.getElementsByClassName('blur')[0];

    _addEventHandlers();
  }

  var _addEventHandlers = function() {
    window.addEventListener('mousemove', _getMousePos, false);
  }

  var _accelerometerUpdate = function(e) {
    xPosition = Math.round(xPosition * 1000) / 1000;
    yPosition = Math.round(yPosition * 1000) / 1000;
  }

  var _getMousePos = function(e) {
    e = e || window.event;

    mouseX = e.pageX;
    mouseY = e.pageY;

    var xPos = (mouseX / window.innerWidth) - 0.5;
    var yPos = (mouseY / window.innerHeight) - 0.5;
    var rotationYValue = 5 * xPos;
    var rotationXValue = 5 * yPos;

    _animate(rotationYValue,rotationXValue);
    textX.innerHTML = mouseX;
    textY.innerHTML = mouseY;
  }


  return {
    init: _init
  }
}();

BlurAnimation.init();



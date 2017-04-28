'use strict';
(function(module){

var ctx = $('canvas').get(0).getContext('2d');
var step = 0;


CanvasRenderingContext2D.prototype.fillTextCircle = function (text, x, y, radius, startRotation) {
    var numRadsPerLetter = 2 * Math.PI / text.length;
    this.save();
    this.translate(x, y);
    this.rotate(Math.PI * 5 / 100 * step++);  /* FOR CLOCK WISE*/
    /*this.rotate(-Math.PI*2/100*step++);   FOR ANTICLOCK WISE*/
    this.rotate(startRotation);
    // console.log(this);
    for (var i=0; i<text.length; i++){
        this.save();
        this.rotate(i*numRadsPerLetter);
        this.fillText(text[i],0,-radius);
        this.restore();
    }
    this.restore();
};


$(document).ready(function() {
  setInterval(function(){
    ctx.clearRect(0, 0, 850, 850);
    ctx.save();
    ctx.fillStyle = ('style', 'color', 'white');
    ctx.fillTextCircle('MAKE ME DIZZY MAKE ME ', 420, 350, 50, 0);
    ctx.fillTextCircle('MAKE ME DIZZY MAKE ME DIZZY MAKE ME DIZZY ', 420, 350, 100, 0);
    ctx.fillTextCircle('MAKE ME DIZZY MAKE ME DIZZY MAKE ME DIZZY ', 420, 350, 150, 0);
    ctx.fillTextCircle('PoOPOPOPOPOPOPOPOPOPOPOPOPOPOPOPOPOPOPOPOp', 420, 350, 200, 0);
    ctx.fillTextCircle('MAKE ME DIZZY MAKE ME DIZZY MAKE ME DIZZY ', 420, 350, 250, 0);        
    ctx.fillTextCircle('MAKE ME DIZZY MAKE ME DIZZY MAKE ME DIZZY ', 420, 350, 300, 0);
    ctx.fillTextCircle('MAKE ME DIZZY MAKE ME ', 420, 350, 50, 0);
    ctx.fillTextCircle('MAKE ME DIZZY MAKE ME DIZZY MAKE ME DIZZY ', 420, 350, 100, 0);
    ctx.fillTextCircle('MAKE ME DIZZY MAKE ME DIZZY MAKE ME DIZZY ', 420, 350, 150, 0);
    ctx.fillTextCircle('POOPOPOPOPOPOPOPOPOPOPOPOPOPOPOPOPOPOPOPOp', 420, 350, 200, 0);
    ctx.fillTextCircle('MAKE ME DIZZY MAKE ME DIZZY MAKE ME DIZZY ', 420, 350, 250, 0);        
    ctx.fillTextCircle('MAKE ME DIZZY MAKE ME DIZZY MAKE ME DIZZY ', 420, 350, 300, 0);
    ctx.restore();    
  }, 90)
});
  
})(window);
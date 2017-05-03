'use strict';
(function(module){

var tCtx = document.getElementById('canvas1').getContext('2d')  
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
    tCtx.clearRect(0, 0, 850, 850);
    tCtx.save();
    tctx.fillStyle = ('style', 'color', '0');
    tCtx.fillTextCircle('MAKE ME DIZZY MAKE ME ', 420, 350, 50, 0);
    tCtx.fillTextCircle('MAKE ME DIZZY MAKE ME DIZZY MAKE ME DIZZY ', 420, 350, 100, 0);
    tCtx.fillTextCircle('MAKE ME DIZZY MAKE ME DIZZY MAKE ME DIZZY ', 420, 350, 150, 0);
    tCtx.fillTextCircle('PoOPOPOPOPOPOPOPOPOPOPOPOPOPOPOPOPOPOPOPOp', 420, 350, 200, 0);
    tCtx.fillTextCircle('MAKE ME DIZZY MAKE ME DIZZY MAKE ME DIZZY ', 420, 350, 250, 0);        
    tCtx.fillTextCircle('MAKE ME DIZZY MAKE ME DIZZY MAKE ME DIZZY ', 420, 350, 300, 0);
    tCtx.fillTextCircle('MAKE ME DIZZY MAKE ME ', 420, 350, 50, 0);
    tCtx.fillTextCircle('MAKE ME DIZZY MAKE ME DIZZY MAKE ME DIZZY ', 420, 350, 100, 0);
    tCtx.fillTextCircle('MAKE ME DIZZY MAKE ME DIZZY MAKE ME DIZZY ', 420, 350, 150, 0);
    tCtx.fillTextCircle('POOPOPOPOPOPOPOPOPOPOPOPOPOPOPOPOPOPOPOPOp', 420, 350, 200, 0);
    tCtx.fillTextCircle('MAKE ME DIZZY MAKE ME DIZZY MAKE ME DIZZY ', 420, 350, 250, 0);        
    tCtx.fillTextCircle('MAKE ME DIZZY MAKE ME DIZZY MAKE ME DIZZY ', 420, 350, 300, 0);
    tCtx.restore();    
  }, 90)
});
  
const prop = {
  block: 40,
  color: ['#000', '#fff'] // changing may break the text in the center 
                          // changing the first value is easier
}
    spinwords.style.color = prop.color[0]

class Plus {
  
  constructor(x, y, type) {
    this.x = x
    this.y = y
    
    // either 0 or 1 (also the color index)
    this.type = type
    
    this.rotating = this.angle = 0
    
  }
  
  drawPlus() {
    
    tCtx2.save()
    tCtx2.translate(this.x, this.y)

    // rotate
    if(this.rotating) {
      
      // rotate the canvas in the respective direction and reset at 90 degress
      if(Math.abs(this.angle += (1 - this.type * 2)) === 90) this.angle = this.rotating = 0
      tCtx2.rotate( this.angle % 360 * toRadian )
        
    }
      
    // draw cross
    tCtx2.fillStyle = prop.color[this.type]
    tCtx2.fillRect(prop.widthOffset, prop.lengthOffset, prop.block, prop.square)
    tCtx2.fillRect(prop.lengthOffset, prop.widthOffset, prop.square, prop.block)
    
    tCtx2.restore()
    
  }
  
   drawSquare() {

    tCtx2.save()
    tCtx2.translate(this.x, this.y)
    
    tCtx2.fillStyle = prop.color[(!this.type)*1] // draw the inverse color
    tCtx2.fillRect(prop.lengthOffset, prop.lengthOffset, prop.square, prop.square)
    
    tCtx2.restore()
    
  }
  
}

/* init */

var tCtx2 = document.getElementById('canvas2').getContext('2d')  
var toRadian = Math.PI / 180

var width, height
var tick = 0
var waves = []
var pluses = []

prop.square = prop.block * 3
prop.lengthOffset = -prop.block * 1.5
prop.widthOffset = -prop.block / 2

title.style.color = prop.color[0]

addEventListener('resize', (function _self(e) {
  
  width = canvas2.width = innerWidth
  height = canvas2.height = innerHeight
  
  pluses.length = waves.length = 0
  
  for(let x = -2, w = width / prop.square; x < w; x++) {
    
    if(x % 6 === 0) waves.push( pluses.length )
    else if(x % 3 === 0) waves.push( pluses.length - 1 )
    
    for(let y = 0, h = height / prop.square + 2; y < h; y++) {
      let plusX = x * prop.square + y * prop.block + (x / 3 % 10 | 0) * prop.block
      let plusY = y * prop.square - x % 3 * prop.block
      pluses.push( // push one of either color
        new Plus(plusX, plusY, 0),  
        new Plus(plusX - prop.block * 2, plusY - prop.block, 1) 
      )      
    }
  }
    
  return _self
})())

;(function update() {
  requestAnimationFrame(update)  

  if(++tick % 10 === 0) // speed of the waves
    for(let i = 0; i < waves.length; i++) {
      if((waves[i] += 2) >= pluses.length) waves[i] = (waves[i] & 1) * 1
      else pluses[waves[i]].rotating = 1
    }
 
  // draw the not moving ones first so we can "overdraw" them
  for(let i = 0, plus; plus = pluses[i]; i++) if(!plus.rotating) plus.drawPlus(); else plus.drawSquare()
  for(let i = 0, plus; plus = pluses[i]; i++) if(plus.rotating) plus.drawPlus()
  
}())

})(window);
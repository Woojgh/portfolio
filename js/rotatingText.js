CanvasRenderingContext2D.prototype.fillTextCircle = function(text,x,y,radius,startRotation){
   var numRadsPerLetter = 2*Math.PI / text.length;
   this.save();
   this.translate(x,y);
   this.rotate(Math.PI*2/100*step++);  /* FOR CLOCK WISE*/
   /*this.rotate(-Math.PI*2/100*step++);   FOR ANTICLOCK WISE*/
   this.rotate(startRotation);

   for(var i=0;i<text.length;i++){
      this.save();
      this.rotate(i*numRadsPerLetter);

      this.fillText(text[i],0,-radius);
      this.restore();
   }
   this.restore();
}

var ctx = $('#canvas').get(0).getContext('2d');

var step = 0;

setInterval(function() {
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.save();
    ctx.fillTextCircle('MAKE ME DIZZY MAKE ME DIZZY MAKE ME DIZZY', 100, 100, 80, 0);
    ctx.restore();
}, 1000);/*1000 = 1 second*/
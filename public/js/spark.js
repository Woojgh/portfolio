	;(function(main) {
		var args = {};
		main(args);
	})(function(args) {

		'use strict';

		var c = document.getElementById('canvas3');
		var tCtx3 = c.getContext('2d');
		var WIDTH = c.width = window.innerWidth;
		var HEIGHT = c.height = window.innerHeight;
		var mouse = {
			x: WIDTH / 2,
			y: HEIGHT / 2
		};

		var Circle = function(x, y, r, c) {
			this.x = x;
			this.y = y;
			this.ox = x;
			this.oy = y;
			this.r = r;
			this.c = c;
			this.alpha = Math.random() * 1;
		};

		Circle.prototype = {
			constructor: Circle,
			update: function(target) {

				var dx = target.x - this.x;
				var dy = target.y - this.y;
				var d = Math.sqrt(dx * dx + dy * dy);

				this.x += dx / d;
				this.y += dy / d;

				var vx = this.x - this.ox;
				var vy = this.y - this.oy;

				this.ox = this.x;
				this.oy = this.y;

				this.x += vx;
				this.y += vy;

				this.c += 1;

			},
			render: function(tCtx3) {
				tCtx3.save();
				tCtx3.globalAlpha = this.alpha;
				tCtx3.fillStyle = 'hsla(' + this.c + ', 100%, 50%, 1)';
				tCtx3.translate(this.x, this.y);
				tCtx3.beginPath();
				tCtx3.arc(0, 0, this.r, 0, Math.PI * 2);
				tCtx3.fill();
				tCtx3.restore();

				tCtx3.strokeStyle = 'hsla(' + this.c + ', 100%, 50%, 1)';
				tCtx3.beginPath();
				tCtx3.moveTo(this.x, this.y);
				tCtx3.lineTo(this.ox, this.oy);
				tCtx3.stroke();
			}
		};

		var circle = null;
		var circleList = [];
		var circleCount = 500;
		var color = Math.random() * 360

		for(var i = 0; i < circleCount; i++) {
			circle = new Circle(
				WIDTH / 2 + Math.cos(Math.random() * Math.PI * 2) * 400 * Math.random(),
				HEIGHT / 2 + Math.sin(Math.random() * Math.PI * 2) * 400 * Math.random(),
				Math.random() * 5,
				color
			);			
			circleList.push(circle);
		}

		c.addEventListener('mousemove', function(e) {
			var rect = c.getBoundingClientRect();
			mouse.x = e.clientX - rect.left;
			mouse.y = e.clientY - rect.top;
		});

		requestAnimationFrame(function loop() {
			requestAnimationFrame(loop);
			tCtx3.globalCompositeOperation = 'source-over';
			tCtx3.fillStyle = 'rgba(0, 0, 0, 1)';
			tCtx3.fillRect(0, 0, WIDTH, HEIGHT);
			tCtx3.globalCompositeOperation = 'lighter';
			for(var i = 0; i < circleCount; i++) {
				circle = circleList[i];
				circle.update(mouse);
				circle.render(tCtx3);				
			}
		});

	});
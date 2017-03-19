function Slime(x, y, color, radius, speed, jumpSpeed, front, leftBound, rightBound, downBound, gravity){
	this.radius = radius;
	
	this.color = color;
	this.eyeColor = "#fff";
	this.pupilColor = "#000";

	this.position = new p5.Vector(x, y);
	this.eyeballPosition = new p5.Vector(0, 0);
	
	this.eyeballRadius = this.radius/4;
	
	this.velocity = new p5.Vector(0,0);
	this.speed = speed;
	this.jumpSpeed = jumpSpeed;

	this.front = front;
	this.bound = new p5.Vector(leftBound, rightBound);
	this.downBound = downBound;

	this.gravity = gravity;

	this.updateEyeballInfo = function(ball){
		var ballPosition = ball.position;
		//arc(ballPosition.x, ballPosition.y, 50, 50, 0, 2*PI);
		var x = ballPosition.x - (this.position.x + this.radius / 2);
		var y = ballPosition.y - (this.position.y - this.radius / 2);
		//fill("white");
		//arc(x, y, this.radius/4, this.radius/4, 0, PI*2);
		var length = sqrt(x*x + y*y);
		//console.log("x=" + x);
		x = x/length * (this.radius / 4);
		y = y/length * (this.radius / 4);
		
		//console.log("eyeX  =" + this.eyePosition.x);
		this.eyeballPosition.x = x / 2 + (this.position.x + this.radius / 2 * this.front);
		this.eyeballPosition.y = y / 2 + (this.position.y - this.radius / 2);
	}

	this.face = function(x, y) {
		this.velocity.x = x * speed;
	}

	this.jump = function() {
		// check if the slime is on the ground
		if (this.position.y == this.downBound) {
			this.velocity.y = - this.jumpSpeed;
		}
	}

	this.update = function() {
	//	console.log(this.direction.x + " " + this.direction.y);
		this.position = p5.Vector.add(this.position, this.velocity);
		if (this.position.x - this.radius < this.bound.x) {
			this.position.x = this.bound.x + this.radius;
		}

		if (this.position.x + this.radius > this.bound.y) {
			this.position.x = this.bound.y - this.radius;
		}

		this.velocity.y += this.gravity;

		if (this.position.y >= this.downBound) {
			this.position.y = this.downBound;
			this.velocity.y = 0;
		}
	}
	this.getNormal = function(point){
		return (p5.Vector.sub(point, this.position)).normalize();
	}
	this.show = function(ball){
		this.update();
		fill(this.color);
		stroke(this.color);

		arc(this.position.x, this.position.y, 2 * this.radius, 2 * this.radius, PI, PI * 2);
	
		fill(this.eyeColor);
		arc(this.position.x + this.radius / 2 * this.front, this.position.y - this.radius / 2, this.radius / 2, this.radius / 2, 0, PI * 2);
		
		this.updateEyeballInfo(ball);
		fill(this.pupilColor);
		stroke(this.pupilColor);
		arc(this.eyeballPosition.x, this.eyeballPosition.y, this.eyeballRadius, this.eyeballRadius, 0, PI * 2);

	}

}
function Ball(positionX, positionY, radius, color, terminalVelocity, boundLeft, boundRight, boundDown, gravity) {
	this.position = new p5.Vector(positionX, positionY);
	this.radius = radius;
	this.color = color;
	this.terminalVelocity = terminalVelocity;
	this.velocity = new p5.Vector(0, 0); // no initial motion
	this.gravity = gravity;
	this.boundLeft = boundLeft;
	this.boundRight = boundRight;
	this.boundDown = boundDown;

	this.update = function(player1, player2, fence) {	
			this.position = p5.Vector.add(this.position, this.velocity);
			this.velocity.y += gravity;
			this.velocity.y = constrain(this.velocity.y, - this.terminalVelocity, this.terminalVelocity);
			this.velocity.x = constrain(this.velocity.x, - this.terminalVelocity, this.terminalVelocity);
			if (this.collided(player1)) {;
				this.bounce(player1);

			}
			if (this.collided(player2)) {
				this.bounce(player2);
			}
			//collide with left bound
			if (this.position.x - this.radius <= this.boundLeft) {
				this.position.x = this.boundLeft + this.radius;
				this.velocity.x = -this.velocity.x;
				
			}
			//collide with right bound
			if (this.position.x + this.radius >= this.boundRight) {	
				this.position.x = this.boundRight - this.radius;
				this.velocity.x = -this.velocity.x;

			}
			//collide with ground
			if (this.position.y + this.radius >= this.boundDown) {
				this.position.y = this.boundDown - this.radius;
				this.velocity.y = 0;
			}
			
			//collide with fence
			if (this.position.x + this.radius >= fence.position.x) {

			}
			if(this.position.y + this.radius > fence.position.y){/*
				&& this.position.x - this.radius <= fence.position.x + fence.width/2 
				&& this.position.x + this.radius >= fence.position.x -fence.width/2){*/
				// alert(this.position.y + this.radius + ","+ fence.position.y + "+"+2*fence.tipRadius);
			}

	}
	this.collided = function(player){
		if (this.position.y <= player.position.y) {
			if (p5.Vector.dist(player.position, this.position) <= this.radius + player.radius){
				return true;
			}
		}
		return false;
	}
	this.bounce = function(player){
		// this.velocity = p5.Vector.add(this.velocity, 2 * player.getNormal(this.position).mult(p5.Vector.dot(player.getNormal(this.position), this.velocity.mult(-1))));
		// this.velocity = this.velocity.rotate(-2 * acos(p5.Vector.dot(this.velocity, player.getNormal(this.position) / (this.velocity.mag() * player.velocity.mag()))));
		// this.velocity = p5.Vector.sub(this.velocity, player.getNormal(this.position).mult((2 * p5.Vector.dot(this.velocity, player.getNormal(this.position))) / sq(player.getNormal(this.position).mag())));
		this.position = p5.Vector.add(player.position, player.getNormal(this.position).mult((this.radius + player.radius)));
		// this.velocity = player.getNormal(this.position).mult(p5.Vector.dot(this.velocity.mult(-1), player.getNormal(this.position)));

		var n = player.getNormal(this.position);
		console.log(n);	
		var u = p5.Vector.sub(this.velocity, player.velocity);
		console.log(u);
		var un = p5.Vector.mult(n, u.dot(n) * 2);
		u.sub(un);
  		this.velocity = p5.Vector.add(u, player.velocity);

	}

	this.show = function(player1, player2, fence) {
		this.update(player1, player2, fence);
		fill(this.color);
		stroke(this.color);
		arc(this.position.x, this.position.y, radius * 2, radius * 2, 0, PI * 2);
	}
}

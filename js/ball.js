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
	this.dead = false;

	this.dissolve = 255;

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
				// ball is dead
				this.dead = true;
				if (this.position.x <= fence.position.x) {
					player2.win();
				} else {
					player1.win();
				}
			}
			
			//collide with fence
			if(this.position.y + this.radius > fence.position.y
				&& this.position.x - this.radius < fence.position.x + fence.size.x/2
				&& this.position.x + this.radius > fence.position.x - fence.size.x/2){
				if(this.position.y > fence.position.y + fence.tipRadius){ //under the fence tip
					if(this.position.x > fence.position.x){
						this.position.x = fence.position.x + fence.size.x/2 + this.radius;
					}
					else if (this.position.x < fence.position.x){
						this.position.x = fence.position.x - fence.size.x/2 - this.radius;
					}
					else{
						alert("this is impossible");
						this.position.x = fence.position.x - fence.size.x/2 - this.radius;
					}
					this.velocity.x = -this.velocity.x;
				}
				else{
					if (p5.Vector.dist(fence.tipPosition, this.position) < this.radius + fence.tipRadius){
						this.position = p5.Vector.add(fence.tipPosition, fence.getNormal(this.position).mult(fence.tipRadius + this.radius));
						this.velocity = p5.Vector.sub(this.velocity, fence.getNormal(this.position).mult((2 * p5.Vector.dot(this.velocity, fence.getNormal(this.position))) / sq(fence.getNormal(this.position).mag())));						
					}
				}
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
		fill("rgb(" + this.color.x + ", " + this.color.y + ", " + this.color.z + ")");
		noStroke();
		arc(this.position.x, this.position.y, radius * 2, radius * 2, 0, PI * 2);
	}
	this.isDead = function() {
		return this.dead;
	}

	this.dissolved = function() {
		noStroke();
		fill(this.color.x, this.color.y, this.color.z, this.dissolve);
		this.dissolve-=20;
		console.log(this.dissolve);
		arc(this.position.x, this.position.y, radius * 2, radius * 2, 0, PI * 2);
		if (this.dissolve > 0) return false;
		else return true;
	}
}

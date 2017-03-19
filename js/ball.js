function Ball(positionX, positionY, radius, color, speed, weight, boundLeft, boundRight, boundDown, gravity) {
	this.position = new p5.Vector(positionX, positionY);
	this.radius = radius;
	this.color = color;
	this.speed = speed;
	this.weight = weight;
	this.direction = new p5.Vector(0, 1); // downwards;
	this.boundLeft = boundLeft;
	this.boundRight = boundRight;
	this.boundDown = boundDown;

	this.update = function(player1, player2) {
		
			this.position = p5.Vector.add(this.position, this.direction.normalize().mult(this.speed));
			if (this.collided(player1)) {

			}
			if (this.collided(player2)) {

			}
			if (this.position.x - this.radius < this.boundLeft) {
				this.position.x = this.boundLeft + this.radius;
			}
			if (this.position.x + this.radius > this.boundRight) {	
				this.position.x = this.boundRight - this.radius;
			}

			if (this.position.y + this.radius > this.boundDown) {
				this.position.y = this.boundDown - this.radius;
			}
	}
	this.collided = function(player){
		if (p5.Vector.dist(player.position, this.position) <= this.radius + player.radius){
			this.position = p5.Vector.add(player.position, player.getNormal(this.position).mult((this.radius + player.radius)));
			return true;
		}
	}
	this.show = function(player1, player2) {
		this.update(player1, player2);
		fill(this.color);
		stroke(this.color);
		arc(this.position.x, this.position.y, radius * 2, radius * 2, 0, PI * 2);
	}
}

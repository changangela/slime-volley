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

	this.update = function() {
		this.position = p5.Vector.add(this.position, this.direction.normalize().mult(this.speed));
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

	this.show = function() {
		this.update();
		fill(this.color);
		stroke(this.color);
		arc(this.position.x, this.position.y, radius * 2, radius * 2, 0, PI * 2);
	}
}

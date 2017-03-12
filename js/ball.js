function Ball(positionX, positionY, radius, color, speed, weight) {
	this.position = new p5.Vector(positionX, positionY);
	this.radius = radius;
	this.color = color;
	this.speed = speed;
	this.weight = weight;
	this.direction = new p5.Vector(0, 1); // downwards;

	this.update = function() {
		this.position = p5.Vector.add(this.position, this.direction.normalize().mult(this.speed));
	}

	this.show = function() {
		fill(this.color);
		stroke(this.color);
		arc(this.position.x, this.position.y, radius * 2, radius * 2, 0, PI * 2);
	}
}

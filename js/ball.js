function Ball(positionX, positionY, radius, color) {
	this.position = new p5.Vector(positionX, positionY);
	this.radius = radius;
	this.color = color;

	this.show = function() {
		fill(this.color);
		stroke(this.color);
		arc(positionX, positionY, radius * 2, radius * 2, 0, PI * 2);
	}
}
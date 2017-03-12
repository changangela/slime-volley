function Ground(canvasWidth, canvasHeight, groundHeight, groundColor) {
	this.position = new p5.Vector(0, canvasHeight - groundHeight);
	this.size = new p5.Vector(canvasWidth, canvasHeight);
	this.color = groundColor;

	this.show = function() {
		fill(this.color);
		stroke(this.color);
		rect(this.position.x, this.position.y, this.size.x, this.size.y);
	}
}
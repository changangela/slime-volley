function Fence(fenceX, fenceY, fenceWidth, fenceHeight, fenceColor) {
    this.position = new p5.Vector(fenceX, fenceY);
    this.size = new p5.Vector(fenceWidth, fenceHeight);
    this.color = fenceColor;
    this.tipRadius = fenceWidth / 2;

    this.show = function() {
    	fill(this.color);
    	stroke(this.color);
    	arc(this.position.x - this.size.x / 2 + this.tipRadius, this.position.y + this.tipRadius, this.tipRadius * 2, this.tipRadius * 2, PI, PI * 2);
        rect(this.position.x - this.size.x / 2, this.position.y + this.tipRadius, this.size.x, this.size.y - this.tipRadius);
    }
}
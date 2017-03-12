function Fence(fenceX, fenceY, fenceWidth, fenceHeight, fenceColor) {
    this.position = new p5.Vector(fenceX, fenceY);
    this.size(fenceWidth, fenceHeight);
    this.color = fenceColor;

    this.show = function() {
        rect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
}
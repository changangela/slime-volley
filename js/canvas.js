function Canvas(canvasX, canvasY, canvasColor) {
    this.size = new p5.Vector(canvasX, canvasY);
    this.color = canvasColor;

    this.show = function() {
        background(this.color);
    }
}
function Canvas(canvasX, canvasY, canvasColor) {
    this.sizeX = canvasX;
    this.sizeY = canvasY;
    this.color = canvasColor;

    this.show = function() {
        background(this.color);
    }
}
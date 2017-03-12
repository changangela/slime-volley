var CANVAS_X = 1000;
var CANVAS_Y = 500;
var FRAME_RATE = 10;
var BACKGROUND_COLOR = "#ADD8E6"; // light blue

var GROUND_COLOR = "#99ff66"; // light green
var GROUND_HEIGHT = 20;

var canvas;
function setup() {
    createCanvas(CANVAS_X, CANVAS_Y);
    frameRate(FRAME_RATE);
    canvas = new Canvas(CANVAS_X, CANVAS_Y, BACKGROUND_COLOR);
    canvas.show();
}

function draw() {
}
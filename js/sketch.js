var CANVAS_X = 1000;
var CANVAS_Y = 500;
var FRAME_RATE = 10;
var BACKGROUND_COLOR = "#ADD8E6"; // light blue

var GROUND_COLOR = "#99ff66"; // light green
var GROUND_HEIGHT = 50;

var SLIME_COLOR = "blue"; // blue

var FENCE_COLOR = "#dbce8e" // light brown
var FENCE_X = 30;
var FENCE_Y = 100;

var canvas;
var slime;
var fence;
var ground;


function setup() {
    createCanvas(CANVAS_X, CANVAS_Y);
    frameRate(FRAME_RATE);
    canvas = new Canvas(CANVAS_X, CANVAS_Y, BACKGROUND_COLOR);
    canvas.show();

    slime = new Slime(CANVAS_X / 4, CANVAS_Y - GROUND_HEIGHT, SLIME_COLOR);

    fence = new Fence(CANVAS_X / 2, CANVAS_Y - FENCE_Y - GROUND_HEIGHT, FENCE_X, FENCE_Y, FENCE_COLOR);
    fence.show();

    ground = new Ground(CANVAS_X, CANVAS_Y, GROUND_HEIGHT, GROUND_COLOR);
    ground.show();

}

function draw() {
	slime.show();
}
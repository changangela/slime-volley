var CANVAS_X = 1000;
var CANVAS_Y = 500;
var FRAME_RATE = 10;
var BACKGROUND_COLOR = "#ADD8E6"; // light blue

var GROUND_COLOR = "#99ff66"; // light green
var GROUND_HEIGHT = 50;

var SLIME_COLOR = "blue"; // blue
var SLIME_RADIUS = 60;
var SLIME_SPEED = 5;

var FENCE_COLOR = "#dbce8e" // light brown
var FENCE_X = 30;
var FENCE_Y = 100;

var BALL_RADIUS = 10;
var BALL_COLOR = "#ffc04c" // light orange
var BALL_SPEED = 10;
var BALL_WEIGHT = 10;

var canvas;
var slime;
var fence;
var ground;
var ball;

function setup() {
    createCanvas(CANVAS_X, CANVAS_Y);
    frameRate(FRAME_RATE);
    canvas = new Canvas(CANVAS_X, CANVAS_Y, BACKGROUND_COLOR);

    slime = new Slime(CANVAS_X / 4, CANVAS_Y - GROUND_HEIGHT, SLIME_COLOR, SLIME_RADIUS, SLIME_SPEED);

    fence = new Fence(CANVAS_X / 2, CANVAS_Y - FENCE_Y - GROUND_HEIGHT, FENCE_X, FENCE_Y, FENCE_COLOR);

    ground = new Ground(CANVAS_X, CANVAS_Y, GROUND_HEIGHT, GROUND_COLOR);

    ball = new Ball(CANVAS_X / 4, CANVAS_Y / 2, BALL_RADIUS, BALL_COLOR, BALL_SPEED, BALL_WEIGHT);
}

function draw() {
	// draw background
	canvas.show();
	ground.show();
	fence.show();

	// update ball location
	ball.update();
	slime.update();
	
	slime.show(ball);
	ball.show();
}

function keyPressed() {

    if (key === 'W') {
        slime.face(0, -1);
    } else if (key === 'S') {
        slime.face(0, 1);
    } else if (key === 'A') {
        slime.face(-1, 0);
    } else if (key === 'D') {
        slime.face(1, 0);
    }

    if (keyCode === UP_ARROW) {
        slime.face(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        slime.face(0, 1);
    } else if (keyCode === LEFT_ARROW) {
        slime.face(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        slime.face(1, 0);
    }


}


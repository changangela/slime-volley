var CANVAS_X = 1000;
var CANVAS_Y = 500;
var FRAME_RATE = 15;
var BACKGROUND_COLOR = "#ADD8E6"; // light blue

var GROUND_COLOR = "#99ff66"; // light green
var GROUND_HEIGHT = 50;

var SLIME1_COLOR = "blue"; // blue
var SLIME2_COLOR = "orange"; // orange

var SLIME_RADIUS = 60;
var SLIME_SPEED = 20;

var FENCE_COLOR = "#dbce8e" // light brown
var FENCE_X = 30;
var FENCE_Y = 100;

var BALL_RADIUS = 10;
var BALL_COLOR = "#ffc04c" // light orange
var BALL_SPEED = 10;
var BALL_WEIGHT = 10;

var canvas;
var slime1;
var slime2;
var fence;
var ground;
var ball;

function setup() {
    createCanvas(CANVAS_X, CANVAS_Y);
    frameRate(FRAME_RATE);
    canvas = new Canvas(CANVAS_X, CANVAS_Y, BACKGROUND_COLOR);

    slime1 = new Slime(CANVAS_X / 4, CANVAS_Y - GROUND_HEIGHT, SLIME1_COLOR, SLIME_RADIUS, SLIME_SPEED, 1, 0, CANVAS_X / 2 - FENCE_X / 2);
    slime2 = new Slime(3 * CANVAS_X / 4, CANVAS_Y - GROUND_HEIGHT, SLIME2_COLOR, SLIME_RADIUS, SLIME_SPEED, -1, CANVAS_X / 2 + FENCE_X / 2, CANVAS_X);

    fence = new Fence(CANVAS_X / 2, CANVAS_Y - FENCE_Y - GROUND_HEIGHT, FENCE_X, FENCE_Y, FENCE_COLOR);

    ground = new Ground(CANVAS_X, CANVAS_Y, GROUND_HEIGHT, GROUND_COLOR);

    ball = new Ball(CANVAS_X / 4, CANVAS_Y / 2, BALL_RADIUS, BALL_COLOR, BALL_SPEED, BALL_WEIGHT);
}

function draw() {
    // check the keys that are pressed
    checkKeys();
	// draw background
	canvas.show();
	ground.show();
	fence.show();

	// update ball location

	slime1.show(ball);
    slime2.show(ball);
	ball.show();
}

function checkKeys() {
    if (keyIsDown(65) && keyIsDown(68)) {
        // both left and right key
        slime1.face(0, 0);
        console.log("Slime 1: left and right");
    } else if (keyIsDown(65)) {
        // left key
        slime1.face(-1, 0);
        console.log("Slime 1: left");
    } else if (keyIsDown(68)) {
        // right key
        slime1.face(1, 0);
        console.log("Slime 1: right");
    } else {
        // neither left or right
        slime1.face(0, 0);
    }


    if (keyIsDown(LEFT_ARROW) && keyIsDown(RIGHT_ARROW)) {
        // both left and right key
        slime2.face(0, 0);
        console.log("Slime 2: left and right");
    } else if (keyIsDown(LEFT_ARROW)) {
        // left key
        slime2.face(-1, 0);
        console.log("Slime 2: left");
    } else if (keyIsDown(RIGHT_ARROW)) {
        // right key
        slime2.face(1, 0);
        console.log("Slime 2: right");
    } else {
        // neither left or right
        slime1.face(0, 0);
    }

}

function keyPressed() {
    if (key === 'W') {
        slime1.jump();
    }

    if (keyCode === UP_ARROW) {
        slime2.jump();
    }
}

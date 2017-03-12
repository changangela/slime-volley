function Slime(canvasX, canvasY, color){
	this.radius = 100;
	this.color = color;
	this.position = new p5.Vector(canvasX/4, canvasY);
	this.eyePosition = new p5.Vector(this.position.x + this.radius/2, this.position.y - this.radius/2);
	this.eyeballPosition = new p5.Vector(0, 0);
	//this.showEyeBall = function(ballPosition){

	//}
	this.show = function(){
		fill(this.color);

		arc(this.position.x, this.position.y, 2*this.radius, 2*this.radius, 0, 0, PI);
		fill("white");
		arc(this.eyePosition.x, this.eyePosition.y, this.radius/2, this.radius/2, 0, Math.PI*2);
		
		
	}

}
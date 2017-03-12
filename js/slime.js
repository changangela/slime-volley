function Slime(canvasX, canvasY, color){
	this.radius = 30;
	this.color = color;
	this.position = new p5.Vector(canvasX/4, canvasY);
	this.eyePosition = new p5.Vector(this.position.x + this.radius/2, this.position.y - this.radius/2);
	this.show = function(){
		fill(this.color);
		fill("black");
		//rect(0,0,50,50);

		console.log(Math.PI);
		arc(50, 50, 50, 50, 0, PI);

		arc(this.position.x, this.position.y, this.radius, this.radius, 0, PI);
		//arc(this.eyePosition.x, this.eyePosition.y, this.radius/4, 0, Math.PI*2);
		
		text("HIIIIIIIIIIIIIIIIIIIIIIIIIIIII", 50, 50);
	}

}
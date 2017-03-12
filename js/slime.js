function Slime(x, y, color){
	this.radius = 100;
	this.color = color;
	this.position = new p5.Vector(100, 100);
	this.eyePosition = new p5.Vector(this.position.x + this.radius/2, this.position.y - this.radius/2);
	this.eyeballPosition = new p5.Vector(0, 0);
	this.eyeballRadius = this.radius/4;
	this.updateEyeballInfo = function(){
		var ballPosition = new p5.Vector(500, 0);
		//arc(ballPosition.x, ballPosition.y, 50, 50, 0, 2*PI);
		var x = ballPosition.x - this.eyePosition.x;
		var y = ballPosition.y - this.eyePosition.y;
		//fill("white");
		//arc(x, y, this.radius/4, this.radius/4, 0, PI*2);
		var length = sqrt(x*x + y*y);
		//console.log("x=" + x);
		x = x/length * (this.radius/4);
		y = y/length * (this.radius/4);
		
		//console.log("eyeX  =" + this.eyePosition.x);
		this.eyeballPosition.x = x/2 + this.eyePosition.x ;
		this.eyeballPosition.y = y/2 + this.eyePosition.y;
	}
	this.show = function(){
		fill(this.color);
		arc(this.position.x, this.position.y, 2*this.radius, 2*this.radius, PI, PI * 2);
		fill("white");
		arc(this.eyePosition.x, this.eyePosition.y, this.radius/2, this.radius/2, 0, PI*2);
		
		this.updateEyeballInfo();
		fill("black");
		arc(this.eyeballPosition.x, this.eyeballPosition.y, this.eyeballRadius, this.eyeballRadius, 0, PI*2);
		
		
	}

}
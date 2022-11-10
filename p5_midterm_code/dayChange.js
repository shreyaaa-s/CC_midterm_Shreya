class dayChange{	 //class for the changing lights
	constructor(x,y){
		this.x = x;
		this.y = y;
		this.circX = random(0,800);
		this.circY = random(0,800);
		this.position = new createVector(random(-300,800),random(-300,800));
		this.velocity = new createVector(1,1);
	}

	night(){
		fill(222, 255, 252);
		stroke(140, 147, 168);
		circle(this.x,this.y,80);
	}

	lightsMove(x,y){
		fill(random(0,225),random(0,225),random(0,225),60);
		noStroke();
		circle(this.position.x +x,this.position.y +y,80);
		this.position.add(this.velocity);
	}

	lightsMoveConcert(y){
				for(let i = 0; i <= 50; i++){
			ellipse(random(0,800),random(0,500),random(2,7),random(2,7));
			console.log("does this even work");
		}
		fill(random(0,225),random(0,225),random(0,225),80);
		noStroke();
		circle(this.circX,0 +y,80);
		this.position.add(this.velocity);
	}

	lightsMoveCity(x,y){
		fill(255,random(230,225),random(200,225),60);
		noStroke();
		circle(this.position.x +x,this.position.y +y,80);
		this.position.add(this.velocity);
	}
}
class dayChange{	
	constructor(x,y){
		this.x = x;
		this.y = y;
		this.circX = random(0,800);
		this.circY = random(0,800);
		this.position = new createVector(random(0,800),random(0,800));
		this.velocity = new createVector(1,1);
	}

	night(){
		fill(222, 255, 252);
		stroke(140, 147, 168);
		circle(this.x,this.y,80);
	}

	lightsMove(){
		fill(random(0,225),random(0,225),random(0,225),60);
		circle(this.position.x,this.position.y,60);


		// for(let i = 0; i < 30; i++){
		// 	fill(random(0,225),random(0,225),random(0,225));
		// 	noStroke();
		// 	circle(cirX,cirY,60);
		// 	}
	}
}
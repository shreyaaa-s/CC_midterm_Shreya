class People{

	constructor(x,y){
		this.x = x;
		this.y = y;
	}

	triPerson(triX,triY){
		
		push();
		translate(triX,triY);
		this.triBody();
		this.Arms();
		this.Legs();
		fill(200);
		this.Head();
		pop();
	}

	rectPerson(rectX,rectY){
		
		push();
		translate(rectX,rectY);
		this.rectBody();
		this.Arms();
		this.Legs();
		fill(200);
		this.Head();
		pop();
	}

	triBody(){
		noStroke();
		triangle(50+this.x,50+this.y,25+this.x,125+this.y,75+this.x,125+this.y);
	}

	rectBody(){
		noStroke();
		rect(35+this.x,70+this.y,30,55);
	}

	Arms(){
		let leftBicepx = map(0.5,0,1,50+this.x,25+this.x); //half of the x distance of the left of the triangle
		let leftBicepy = map(0.5,0,1,50+this.y,125+this.y); //half of the y distance of the left of the triangle
		let rightBicepx = map(0.5,0,1,50+this.x,75+this.x); //half of the x distance of the right of the triangle
		let rightBicepy = map(0.5,0,1,50+this.y,125+this.y); //half of the y distance of the right of the triangle

		strokeWeight(4);
		stroke(51);
		line(leftBicepx,leftBicepy,20+this.x,100+this.y); //first line of left arm
		line(20+this.x,100+this.y,10+this.x,75+this.y); // second line of left arm

		line(rightBicepx,rightBicepy,80+this.x,100+this.y); //first line of right arm
		line(80+this.x,100+this.y,90+this.x,125+this.y) //second line of right arm
	}

	Legs(){
		let leftLegx = map(3.3,0,10,25+this.x,75+this.x); //left leg starting position
		let rightLegx = map(6.6,0,10,25+this.x,75+this.x); //right leg starting position

		line(leftLegx,125+this.y,leftLegx,150+this.y);
		line(rightLegx,125+this.y,rightLegx,150+this.y);
	}

	Head(){
		circle(50+this.x,50+this.y,40);
	}

	dancePair(pairX,pairY){ //draws the people as a pair
		//figure out how to get the people to dance around
		push()
		//rotate(radians(random(0,5)));
		translate(pairX,pairY);
		fill(219, 213, 110);
		this.triPerson(0,0);
		//pop();
		//push();
		//rotate(radians(random(355,360)));
		fill(189, 147, 216);
		this.rectPerson(50,0); //moves the rect person to the right of the tri person
		pop();
	}

	personMove(){
		// let moveUp = true;
		// let moveDown = false;
		// if(moveUp == true){
			//for(let i = 0; i < 9; i++){
			this.x = this.x+0.5;
			// if(this.x >= 10){
			// 	this.x = this.x-0.5;
			// }
		//}
		// x
	}

}
class Woman{

	constructor(x,y){
		this.x = x;
		this.y = y;
	}

	triBody(){
		noStroke();
		triangle(50+this.x,50+this.y,25+this.x,125+this.y,75+this.x,125+this.y);
	}
	triArms(){
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

	triLegs(){
		let leftLegx = map(3.3,0,10,25+this.x,75+this.x); //left leg starting position
		let rightLegx = map(6.6,0,10,25+this.x,75+this.x); //right leg starting position

		line(leftLegx,125+this.y,leftLegx,150+this.y);
		line(rightLegx,125+this.y,rightLegx,150+this.y);
	}

	triHead(){
		circle(50+this.x,50+this.y,40);
	}

}
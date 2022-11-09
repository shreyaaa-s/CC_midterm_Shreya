class People{

	constructor(){
		this.concTriX = random(-50,800);
		this.concTriY = random(450,800);
		this.concRectX = random(-50,800);
		this.concRectY = random(450,800);
	}

	triPerson(triX,triY){
		this.triBody(triX,triY);
		this.Arms(triX,triY);
		this.Legs(triX,triY);
		fill(200);
		this.Head(triX,triY);
	}

	rectPerson(rectX,rectY){
		this.rectBody(rectX,rectY);
		this.Arms(rectX,rectY);
		this.Legs(rectX,rectY);
		fill(200);
		this.Head(rectX,rectY);
		}

	roundPerson(roundX,roundY){
		this.roundBody(roundX+15,roundY+30);
		this.Arms(roundX,roundY);
		this.Legs(roundX,roundY);
		fill(200);
		this.Head(roundX,roundY);
	}

	concTriPerson(x,y){
		this.triBody(this.concTriX + x,this.concTriY + y);
		this.Arms(this.concTriX + x,this.concTriY + y);
		this.Legs(this.concTriX + x,this.concTriY + y);
		fill(200);
		this.Head(this.concTriX + x,this.concTriY + y);
	}

	concRectPerson(x,y){
		this.rectBody(this.concRectX + x,this.concRectY + y);
		this.Arms(this.concRectX + x,this.concRectY + y);
		this.Legs(this.concRectX + x,this.concRectY + y);
		fill(200);
		this.Head(this.concRectX + x,this.concRectY + y);
		}


	triBody(x,y){
		noStroke();
		triangle(50+x,50+y,25+x,125+y,75+x,125+y);
	}

	rectBody(x,y){
		noStroke();
		rect(35+x,70+y,30,55);
	}

	roundBody(x,y){
		noStroke();
		ellipse(35+x,70+y,30,60);
	}

	Arms(x,y){
		let leftBicepx = map(0.5,0,1,50+x,25+x); //half of the x distance of the left of the triangle
		let leftBicepy = map(0.5,0,1,50+y,125+y); //half of the y distance of the left of the triangle
		let rightBicepx = map(0.5,0,1,50+x,75+x); //half of the x distance of the right of the triangle
		let rightBicepy = map(0.5,0,1,50+y,125+y); //half of the y distance of the right of the triangle

		strokeWeight(4);
		stroke(200);
		line(leftBicepx,leftBicepy,20+x,100+y); //first line of left arm
		line(20+x,100+y,10+x,75+y); // second line of left arm

		line(rightBicepx,rightBicepy,80+x,100+y); //first line of right arm
		line(80+x,100+y,90+x,125+y) //second line of right arm
	}

	Legs(x,y){
		let leftLegx = map(3.3,0,10,25+x,75+x); //left leg starting position
		let rightLegx = map(6.6,0,10,25+x,75+x); //right leg starting position

		line(leftLegx,125+y,leftLegx,150+y);
		line(rightLegx,125+y,rightLegx,150+y);
	}

	Head(x,y){
		stroke(51);
		circle(50+x,50+y,40);
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
		//+x =+x+0.5;
			// if+x >= 10){
			// +x =+x-0.5;
			// }
		//}
		// x
	}

}
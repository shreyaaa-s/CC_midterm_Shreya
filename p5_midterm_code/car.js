class Car{
	
	constructor(){
	}

	buildCar(){
		strokeWeight(2);
		this.carBody();
		this.windows();
		this.wheels();
	}

	carBody(){
		beginShape();
		line(0,58,11,33);
		line(11,33,43,33);
		line(43,33,58,0);
		line(58,0,142,0);
		line(142,0,155,33);
		line(155,33,188,33);
		line(188,33,200,58);
		line(200,58,0,58);
		endShape();
	}

	windows(){
		fill(160, 227, 255, 70);
		quad(51,29,62,5,82,5,82,29);
		rect(88,5,28,24);
		quad(121,29,121,5,138,5,149,29);
	}

	wheels(){
		fill(100);
		circle(63,58,36);
		circle(135,58,36);
	}



}
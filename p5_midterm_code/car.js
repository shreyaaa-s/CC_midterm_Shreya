class Car{
	
	constructor(){
		this.randCarCol = int(random(0,3));
	}

	buildCar(carX,carY){
		strokeWeight(2);
		this.carColor();
		this.carBody(carX,carY);
		this.windows(carX,carY);
		this.wheels(carX,carY);
	}

	carBody(x,y){
		beginShape();
		vertex(0+x,58+y,11+x,33+y);
		vertex(11+x,33+y,43+x,33+y);
		vertex(43+x,33+y,58+x,0+y);
		vertex(58+x,0+y,142+x,0+y);
		vertex(142+x,0+y,155+x,33+y);
		vertex(155+x,33+y,188+x,33+y);
		vertex(188+x,33+y,200+x,58+y);
		vertex(200+x,58+y,0+x,58+y);
		endShape();
	}

	windows(x,y){
		fill(160, 227, 255, 70);
		quad(51+x,29+y,62+x,5+y,82+x,5+y,82+x,29+y);
		rect(88+x,5+y,28,24);
		quad(121+x,29+y,121+x,5+y,138+x,5+y,149+x,29+y);
	}

	wheels(x,y){
		fill(100);
		circle(63+x,58+y,36);
		circle(135+x,58+y,36);
	}

	carColor(){
		console.log(this.randCarCol);
		if(this.randCarCol == 0){
			fill(92, 27, 27);
		} else if(this.randCarCol == 1){
			fill(15, 25, 54);
		} else if (this.randCarCol == 2){
			fill(22, 31, 23);
		}
	}



}
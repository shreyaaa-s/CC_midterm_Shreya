class Buildings{
	constructor(){
		this.heightVar = int(random(0,4)); //determines what height the building should be
		this.buildingX = 125; //later on put this into a makeBuilding method
		this.buildingHeight = 1; //intializing the buildingHeight variable
	}

	makeBuilding(x){
		this.heightBuild(); //calling the method that gives the neight of the building
		strokeWeight(2);
		stroke(0);
		rect(this.buildingX * x,this.buildingHeight,125,height-this.buildingHeight)
		strokeWeight(1);
		this.windows(x);
	}

	heightBuild(){
		//determines the building's actual height based on the random variable created earlier
		if(this.heightVar == 0){
			fill(175,191,192);
			this.buildingHeight = 250; //second tallest building
		} else if(this.heightVar == 1){
			fill(94);
			this.buildingHeight = 400; //middle building
		} else if(this.heightVar == 2){
			fill(110,120,120);
			this.buildingHeight = 550; //smallest building
		} else if(this.heightVar = 3){
			fill(200,195,190);
			this.buildingHeight = 150; //tallest building
		}
		//console.log(this.heightVar);
	}

	windows(winX){
		// let xWinVar = 10;
		// let yWinVar = 15;
		fill(221,249,255,70);
		if(this.heightVar == 0){
			for(let i = 0; i < 4; i++){
				for(let j = 0; j < 10; j++){
			rect((this.buildingX * winX) + 7 + (30*i), this.buildingHeight + 10+(50*j),20,40);
				}
			}
		} else if(this.heightVar == 1){
			for(let i = 0; i < 3; i++){
				for(let j = 0; j < 5; j++){
			rect((this.buildingX * winX) + 7 + (40*i), this.buildingHeight + 10+(70*j),30,60);
				}
			}		
		} else if(this.heightVar == 2){
			for(let i = 0; i < 2; i++){
				for(let j = 0; j < 5; j++){
			rect((this.buildingX * winX) + 7 + (60*i), this.buildingHeight + 10+(40*j),50,30);
				}
			}
		} else if(this.heightVar = 3){
			for(let i = 0; i < 2; i++){
				for(let j = 0; j < 10; j++){
			rect((this.buildingX * winX) + 7 + (60*i), this.buildingHeight + 10+(60*j),50,50);
				}
			}
		}
	}

}
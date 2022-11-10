let mainPerson;
let sunMoon;
let building1;
let mainInit;
let xInc;
let yInc;
let countPeople;
let countDay;
let countDay2;
let scene = '1';
let buildings = [];
let persons = [];
let r1;
let g1;
let b1;
let peopleLoop;
let concertPeopleLoop;
let lightLoop;
let carsLeft = [];
let carsRight = [];
let cityPeopleLeft = [];
let cityPeopleRight = [];
let concertPeople = [];
let concertLights = [];
let cityLights = [];
let bounce;
let triY;
let rectY;
let singer;
let drummer;
let guitarist;
let lightSpeed;
let leftX;
let rightX;
let leftPersonX;
let rightPersonX;
let leftDuoX;
let rightDuoX;


function setup(){
  createCanvas(800,800);
  background(128,79,79);
  noStroke();
  persons = new People();
  mainPerson = new People();
  mainInit = new createVector(0,0);
  building1 = new Buildings();
  instrument = new Instruments();
  xInc = 0;
  yInc = 0;
  countPeople = 1;
  countDay = 1;
  countDay2 = 0;
  r1 = 45;
  g1 = 35;
  b1 = 39;
  peopleLoop = 15;
  lightLoop = 50;
  concertPeopleLoop = 0;
  bounce = 5;
  triY = 0;
  rectY = 0;
  lightSpeed = 1;
  leftX = 1;
  rightX = 1;
  leftPersonX = 1;
  rightPersonX = 1;
  leftDuoX = 1;
  rightDuoX = 1;

  singer = new People();
  drummer = new People();
  guitarist = new People();

  for(let i = 0; i < 8; i++){
  	buildings[i] = new Buildings();
  }

  for(let i = 0; i < 6; i++){
  	carsLeft[i] = new Car();
  }

  for(let i = 0; i < 6; i++){
  	carsRight[i] = new Car();
  }

  for(let i = 0; i < 50; i++){
  	concertPeople[i] = new People();
  }

  for(let i = 0; i < 50; i++){
  	concertLights[i] = new dayChange();
  }

  for(let i = 0; i < 50; i++){
  	cityLights[i] = new dayChange();
  }

  for(let i = 0; i < 6; i++){
  	cityPeopleLeft[i] = new People();
  }

  for(let i = 0; i < 6; i++){
  	cityPeopleRight[i] = new People();
  }
}

function draw(){
	if(scene == '1'){
		countDay = countDay +1;
		partyTime();
	} else if(scene == '2'){
		dayWSP();
		carDrive();
		cityPeople();

	} else if(scene == '3'){
		concert();
	}
}

function partyTime(){ //party scene
	countPeople = countPeople +1;
	if(countPeople%10 == 0){
		background(r1, g1, b1);
		peopleAtNight();
	}
	if(countDay >= 50 && countDay < 100){
		r1 = map(countDay, 50, 100, 45, 101);
		g1 = map(countDay, 50, 100, 35, 222);
		b1 = map(countDay, 50, 100, 39, 241);
		peopleLoop = map(countDay, 50, 100, 15, 0);
		lightLoop = map(countDay, 50, 100, 50, 0);
	} if(countDay >= 100){
		r1 = 101;
		g1 = 222;
		b1 = 241;
		peopleLoop = 0;
		lightLoop = 0;
	}

	fill(255,0,0);
	mainPerson.roundPerson(mainInit.x,mainInit.y);
	moveMain();
}

function dayWSP(){ //day scene
	background(101,222,241);
	for(let i = 0; i < buildings.length; i++){
	buildings[i].makeBuilding(i);
}
		fill(255,0,0);
		mainPerson.roundPerson(mainInit.x,mainInit.y);
		moveMain();
}


function peopleAtNight(){ //people at the party scene
	//frameRate(1);
	for(let i = 0; i < peopleLoop; i++){
		persons.dancePair(random(-50,800),random(-50,800));
		fill(19, 196, 163);
		persons.triPerson(random(-50,800),random(-50,800));
		fill(253, 167, 93);
		persons.rectPerson(random(-50,800),random(-50,800));
	}

	//frameRate(6);
	for(let i = 0; i < lightLoop; i++){
		sunMoon = new dayChange(0,0);
		sunMoon.lightsMove(0,0);
	}
}

function concert(){ //concert scene
	background(45, 35, 39);
	fill(255, 205, 54);
	noStroke();
	fill(69, 54, 75);
	rect(0,0,800,500);
	stroke(225, 207, 168);
	line(0,500,800,500);

	noStroke();
	concertPeopleBounce();

	instrument.drum();
	instrument.guitar();
	instrument.microphone();



	fill(255,0,0);
	mainPerson.roundPerson(mainInit.x,mainInit.y);
	moveMain();
}

function concertPeopleBounce(){ //creating and moving the people at the concert
	if(mainInit.x < 400){
	for(let i = 0; i < concertPeople.length; i++){
		fill(19, 196, 163);
		concertPeople[i].concTriPerson(0,0);
		fill(253, 167, 93);
		concertPeople[i].concRectPerson(0,0);
		//console.log("is this even running");
	}
	fill(50);
	singer.roundPerson(360,280);
	fill(0);
	drummer.roundPerson(100,200);
	fill(25);
	guitarist.roundPerson(650,200);

	} else if(mainInit.x >= 400){
		lightLoop = 0;
		for(let i = 0; i < concertPeople.length; i++){
		fill(19, 196, 163);
		concertPeople[i].concTriPerson(0,random(0,15));
		fill(253, 167, 93);
		concertPeople[i].concRectPerson(0,random(0,15));
	}
	fill(50);
	singer.roundPerson(360,280 + random(0,15));
	fill(0);
	drummer.roundPerson(100,200 + random(0,15));
	fill(25);
	guitarist.roundPerson(650,200 + random(0,15));

	for(let i = 0; i < concertLights.length; i++){
		concertLights[i].lightsMoveConcert(lightSpeed);
		lightSpeed = lightSpeed + random(0,1);
		if(lightSpeed >= 800){
			lightSpeed = 0;
		}
	}
}
}



function moveMain(){ //moving the main guy
if(scene == '1'){
	if(countDay >= 100){
		xInc = 2;
		yInc = 2;
		mainInit.x = mainInit.x + xInc;
		mainInit.y = mainInit.y + yInc;
	} else{
		mainInit.x = mainInit.x + random(-5,5);
		mainInit.y = mainInit.y + random(-5,5);
	}
	} else if(scene == '2'){
		xInc = 3;
		yInc = 0;
		// mainInit.x = 0;
		// mainInit.y = 700;
		mainInit.x = mainInit.x + xInc;
		if(mainInit.x >= width/2 && countDay2 < 100){
			mainInit.x = 400;
			countDay2 = countDay2 + 1;
		} else if(countDay2 >= 100){
				xInc = 1;
				mainInit.x = mainInit.x + xInc;
		}
		// console.log(xInc);
		// console.log(mainInit.x);
	} else if(scene == '3'){

		mainInit.x = mainInit.x + xInc;
		if(mainInit.x >= width/2){
			mainInit.x = 400;
		}
	}

	if(mainInit.x > 800 && scene == '1') {
	    mainInit.x = 0;
	    mainInit.y = 650;
	    scene = '2';
  } else if (mainInit.x > 800 && scene == '2'){
  		mainInit.x = 0;
	    mainInit.y = 650;
  		scene = '3';
  }
  //console.log(mainInit.x);
}

function carDrive(){ //car moving scene
	for(let i = carsLeft.length - 1; i >= 0; i--){
		carsLeft[i].buildCar(-200 + leftX,725);
		leftX = leftX + 1;
		//console.log(leftX);
		if(leftX >= 1000){
			leftX = 0;
		}
		//shuffle(carsLeft);
	}
	for(let i = 0; i < carsRight.length; i++){
		carsRight[i].buildCar(800 - rightX,725);
		rightX = rightX + 2;
		if(rightX >= 1000){
			rightX = 0;
		}
		//shuffle(carsRight);
	}
}

function cityPeople(){ //the movement of the people in the city
	for(let i = 0; i < cityPeopleLeft.length; i++){
		fill(19, 196, 163);
		cityPeopleLeft[i].triPerson(0 + leftPersonX,650);
		leftPersonX = leftPersonX + 0.75;
		if(leftPersonX >= 1000){
			leftPersonX = 0;
		}
	}
	for(let i = 0; i < cityPeopleRight.length; i++){
		fill(253, 167, 93);
		cityPeopleRight[i].rectPerson(800 - rightPersonX,650);
		rightPersonX = rightPersonX + 0.5;
		if(rightPersonX >= 1000){
			rightPersonX = 0;
		}
	}
	for(let i = 0; i < cityPeopleRight.length; i++){
		fill(253, 167, 93);
		cityPeopleRight[i].dancePair(800 - rightDuoX,650);
		rightDuoX = rightDuoX + 0.75;
		if(rightDuoX >= 1000){
			rightDuoX = 0;
		}
	}
	for(let i = 0; i < cityPeopleLeft.length; i++){
		fill(253, 167, 93);
		cityPeopleRight[i].dancePair(0 + leftDuoX,650);
		leftDuoX = leftDuoX + 0.5;
		if(leftDuoX >= 1000){
			leftDuoX = 0;
		}
	}

	for(let i = 0; i < cityLights.length; i++){
		cityLights[i].lightsMoveCity(0,0);
		lightSpeed = lightSpeed + random(0,1);
		if(lightSpeed >= 800){
			lightSpeed = 0;
		}
	}
}
let person1;
let person2;
let personDuo;
let mainPerson;
let sunMoon;
let building1;
let perDuo;
let mainInit;
let xInc;
let yInc;
let countPeople;
let countDay;
let scene = '1';
let buildings = [];
let persons = [];
let r1;
let g1;
let b1;
let peopleLoop;
let concertPeopleLoop;
let lightLoop;
let cars = [];
let concertPeople = [];
let concertLights = [];
let bounce;
let triY;
let rectY;
let singer;
let drummer;
let guitarist;
let lightSpeed;


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

  singer = new People();
  drummer = new People();
  guitarist = new People();

  for(let i = 0; i < 8; i++){
  	buildings[i] = new Buildings();
  }

  for(let i = 0; i < 10; i++){
  	cars[i] = new Car();
  }

  for(let i = 0; i < 50; i++){
  	concertPeople[i] = new People();
  }

  for(let i = 0; i < 50; i++){
  	concertLights[i] = new dayChange();
  }
}

function draw(){
	if(scene == '1'){
		countDay = countDay +1;
		partyTime();
		carDrive();
	} else if(scene == '2'){
		dayWSP();

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
		console.log("is this even running");
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
		//mainInit.x = 0;
		//mainInit.y = 700;
		mainInit.x = mainInit.x + xInc;
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
	for(let i = 0; i < cars.length; i++){
		cars[i].buildCar(-200,725);
	}

}

function keyPressed() {
  if (keyCode === 49) {
    scene = '1';
  } else if (keyCode === 50) {
    scene = '2';
  }
}
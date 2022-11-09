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
let lightLoop;
let car1;


function setup(){
  createCanvas(800,800);
  background(128,79,79);
  noStroke();
  persons = new People();
  mainPerson = new People();
  mainInit = new createVector(0,0);
  building1 = new Buildings();
  car1 = new Car();
  xInc = 0;
  yInc = 0;
  countPeople = 1;
  countDay = 1;
  r1 = 45;
  g1 = 35;
  b1 = 39;
  peopleLoop = 15;
  lightLoop = 50;

  for(let i = 0; i < 8; i++){
  	buildings[i] = new Buildings();
  }
}

function draw(){
	if(scene == '1'){
		countDay = countDay +1;
		partyTime();
		  car1.buildCar();

	} else if(scene == '2'){
		//frameRate(60);
		dayWSP();
		  car1.buildCar();

	}
}

function partyTime(){
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

function dayWSP(){
	background(101,222,241);
	for(let i = 0; i < buildings.length; i++){
	buildings[i].makeBuilding(i);
}
		fill(255,0,0);
		mainPerson.roundPerson(mainInit.x,mainInit.y);
		moveMain();
}


function peopleAtNight(){
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
		sunMoon.lightsMove();
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
		console.log(xInc);
		console.log(mainInit.x);

	}	

	if(mainInit.x > 800) {
    mainInit.x = 0;
    mainInit.y = 650;
    scene = '2';
  }
  //console.log(mainInit.x);

}

function keyPressed() {
  if (keyCode === 49) {
    scene = '1';
  } else if (keyCode === 50) {
    scene = '2';
  }
}
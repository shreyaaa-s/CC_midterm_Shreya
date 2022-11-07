let person1;
let person2;
let personDuo;
let mainPerson;
let sunMoon;
let building1;
let perDuo;
let mainInit;
let xInc;
let count;
let scene = '1';
let buildings = [];

function setup(){
  createCanvas(800,800);
  background(128,79,79);
  noStroke();
  person1 = new People();
  person2 = new People();
  personDuo = new People();
  mainPerson = new People();
  mainInit = new createVector(0,400);
  building1 = new Buildings();
  xInc = 10;
  count = 1;

  for(let i = 0; i < 8; i++){
  	buildings[i] = new Buildings();
  }
}

function draw(){
	if(scene == '1'){
		frameRate(6);
		partyTime();
	} else if(scene == '2'){
		frameRate(60);
		dayWSP();
		mainPerson.roundPerson(mainInit.x,mainInit.y);
		moveMain();
	}
}

function partyTime(){
	background(45, 35, 39);
	peopleAtNight();
	fill(255,0,0);
	mainPerson.roundPerson(mainInit.x,mainInit.y);
	moveMain();
}

function dayWSP(){
	background(101,222,241);
	for(let i = 0; i < buildings.length; i++){
	buildings[i].makeBuilding(i);
}
}


function dayTime(){

}

function peopleAtNight(){
	push();
	frameRate(1);
	if(count )
	for(let i = 0; i < 15; i++){
	personDuo.dancePair(random(-50,800),random(-50,800));
	fill(19, 196, 163);
	person1.triPerson(random(-50,800),random(-50,800));
	fill(252, 81, 48);
	person2.rectPerson(random(-50,800),random(-50,800));
}
	pop();
	push();
	frameRate(6);
	for(let i = 0; i < 50; i++){
		sunMoon = new dayChange(0,0);
		sunMoon.lightsMove();
	}
	pop();
}



function moveMain(){
	//frameRate(60);
	mainInit.x = mainInit.x + xInc;

	if(mainInit.x > 800) {
    mainInit.x = 0;
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
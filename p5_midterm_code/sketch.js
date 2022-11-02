let person1;
let person2;
let personDuo;
let sunMoon;
let perDuo;
let per1;
let per2;
let cirX = 0;
let count = 1;

function setup(){
  createCanvas(800,800);
  background(128,79,79);
  noStroke();
  person1 = new People();
  person2 = new People();
  personDuo = new People();


}

function draw(){
	background(128,79,79);
	//person1 = new Woman(mouseX,mouseY);
	background(45, 35, 39);
	peopleAtNight();
	//movep();
	//personDuo.dancePair(0,0);
	// for (var i = 0; i < 800; i++) {
	// 	circle(cirX + i, 60, 50);
	// };
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
	for(let i = 0; i < 30; i++){
		sunMoon = new dayChange(0,0);
		sunMoon.lightsMove();
	}
	pop();
}



function movep(){
person1.personMove();
	person1.triPerson(0,0);
}

function nightLights(){

}

function mousePressed(){

  
}
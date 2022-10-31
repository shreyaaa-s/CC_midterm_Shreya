let person1;
let person2;
let personDuo;
let sunMoon;

function setup(){
  createCanvas(800,800);
  background(128,79,79);
  noStroke();
  person1 = new People(400,0);
  person2 = new People(100,300);
  personDuo = new People(0,0);


}

function draw(){
	background(128,79,79);
	//person1 = new Woman(mouseX,mouseY);
	sunMoon = new dayChange(0,0);
	background(45, 35, 39);
	peopleAtNight();
	//movep();
	sunMoon.lightsMove();
	personDuo.dancePair(0,0);
}

function peopleAtNight(){
	for(let i = 0; i < 15; i++){
	personDuo.dancePair(random(-50,800),random(-50,800));
	fill(19, 196, 163);
	person1.triPerson(random(-50,800),random(-50,800));
	fill(252, 81, 48);
	person2.rectPerson(random(-50,800),random(-50,800));
}
}

function movep(){
person1.personMove();
	person1.triPerson(0,0);
}

function nightLights(){

}

function mousePressed(){

  
}
function setup(){
  createCanvas(800,800);
  background(128,79,79);
  noStroke();
  
}

function draw(){
  background(128,79,79);
  drawDirt();
  drawMycelium();
  drawMushroom1();
  drawMushroom2();
  drawMushroom3();
  drawMycelium();
  drawLight();
  
}

function drawMycelium(){
  
  stroke(240,220,213);
  strokeWeight(2);
  
  //Mushroom1
  line(230,265,218,320);
  line(218,320,180,310);
  line(218,320,170,340);
  line(218,320,220,380);
  line(170,340,185,360);
  line(170,340,165,375);
  line(220,380,200,395);
  line(220,380,240,440);
  line(220,380,250,405);
  
  //Mushroom2
  line(83.5,376.5,100,400);
  line(100,400,75,450);
  line(100,400,125,415);
  line(125,415,160,380);
  line(125,415,140,435);
  line(75,450,55,460);
  line(75,450,105,510);
  line(125,415,200,420);
  
  //Mushroom3
  line(348,440,320,455);
  line(348,440,400,470);
  line(348,440,355,515);
  line(320,455,280,445);
  line(320,455,270,470);
  line(400,470,520,460);
  line(400,470,470,490);
  line(400,470,430,550);
  line(355,515,320,530);
  line(355,515,335,580);
  line(520,460,540,470);
  line(520,460,560,440);
  line(470,490,460,510);
  line(470,490,490,520);
  line(470,490,515,485);
  line(430,550,420,565);
  line(430,550,450,580);
  line(490,520,487,543);
    
}

function drawMushroom1(){
  
  //undercap1B
  beginShape();
  fill(186,122,102);
  noStroke();
  vertex(130,140);
  bezierVertex(130,140,170,160,205,167);
  vertex(210,150);
  endShape();
  
  beginShape();
  vertex(260,160);
  vertex(262,174);
  bezierVertex(262,174,300,180,340,173);
  endShape();
  
  //stem1
  beginShape();
  fill(181,125,110);
  noStroke();
  vertex(200,260);
  bezierVertex(200,260,170,240,210,150);
  vertex(260,160);
  bezierVertex(260,160,275,230,260,269);
  vertex(260,269);
  endShape();
 
  //cap1
  beginShape();
  fill(122,64,68);
  noStroke();
  vertex(130,140);
  bezierVertex(110,140,260,0,340,170);
  vertex(340,173);
  endShape();
 
  stroke(186,122,102);
  strokeWeight(2);
  line(132,140,338,173);
  
  //undercap1A
  beginShape();
  fill(186,122,102);
  noStroke();
  vertex(130,140);
  bezierVertex(110,140,240,120,340,170);
  vertex(340,173);
  endShape();

  //gill1A
  fill(235,180,162);
  noStroke();
  curve(110,120,130,139,208,156,220,140);
 
  //gill1B
  curve(120,140,170,157,207,158,220,140);
 
  //gill1C
  stroke(235,180,162);
  strokeWeight(1.5);
  curve(162,128,165,136.5,212,155,225,158);

  //gill1D
  curve(210,130,200,137,215,155,220,160);
 
  //gill1E
  curve(220,130,225,139,225,156,217,160);

  //gill1F
  curve(245,132,250,142.5,240,158,227,162);
  
  //gill1G
  curve(265,140,275,147,255,160,245,165);
  
  //gill1H
  curve(330,150,312,158,258,161,250,158);
  
  //gill1I
  curve(360,160,340,172,260,163,250,150);

  //gill1J
  curve(240,150,262,168,300,175.5,330,170);

}

function drawMushroom2(){
  
  //undercap2B
  fill(186,122,102);
  noStroke();
  beginShape();
  vertex(20,265);
  bezierVertex(20,265,112,330,218,292);
  endShape();
  
  //stem1
  fill(181,125,110);
  noStroke();
  ellipse(115,height/2.55,70,170);
  ellipse(115,height/2.4,77,160);
  
  fill(77,51,50);
  noStroke();
  ellipse(118,height/2.03,110,45);
  
  //cap2
  beginShape();
  fill(122,64,68);
  vertex(20,265);
  bezierVertex(15,265,120,80,220,290);
  vertex(218,292);
  endShape();
 
  //undercap2A
  beginShape();
  fill(186,122,102);
  noStroke();
  vertex(20,265);
  bezierVertex(20,265,112,215,218,292);
  endShape();
  
  stroke(186,122,102);
  strokeWeight(2);
  line(22,265,216,291);
  
  //gill2A
  fill(247,190,171);
  noStroke();
  curve(40,270,53,283,85,282,95,260);

  //gill2B
  curve(0,245,20,265,85,278,100,260);
 
  //gill2C
  curve(30,220,50,254,92,277,110,265);
 
  //gill2D
  curve(90,225,80,249,97,278,113,290);

  //gill2E
  curve(100,220,110,249,105,280,95,290);
  
  //gill2F
  curve(120,230,140,254,120,281,90,300);
  
  //gill2G
  curve(180,230,170,265,130,282,100,277);
  
  //gill2H
  curve(220,260,200,280,138,282,120,270);
  
  //gill2I
  curve(240,275,218,292,147,285,120,270);
  
  //gill2J
  curve(200,280,185,301,149,291,130,270);
    
}

function drawMushroom3(){
  
  //undercap2B
  fill(186,122,102);
  noStroke();
  beginShape();
  vertex(220,330);
  bezierVertex(220,330,335,400,420,350);
  endShape();
  
  //stem
  fill(181,125,110);
  noStroke();
  ellipse(320,height/2.1,70,170);
  ellipse(320,height/2.05,77,160);
  
  fill(77,51,50);
  noStroke();
  ellipse(314,height/1.75,110,45);
  
  //cap3
  beginShape();
  fill(122,64,68);
  noStroke();
  vertex(220,330);
  bezierVertex(220,330,335,100,420,350);
  vertex(420,350);
  endShape();
  //ellipse(220,330,2,2);
  //ellipse(420,350,2,2);
  
  //undercap2A
  beginShape();
  fill(186,122,102);
  noStroke();
  vertex(220,330);
  bezierVertex(220,330,335,270,420,350);
  endShape();
  
  stroke(186,122,102);
  strokeWeight(2);
  line(222,330,417,350);
  
  //gill3A
  fill(247,190,171);
  noStroke();
  curve(220,335,250,345,289,345,310,320);
  
  //gill3B
  curve(170,290,220,330,290,340,320,330);
  
  //gill3C
  curve(230,280,250,318,293,340,330,350);
  
  //gill3D
  curve(285,280,280,310,300,340,310,350);
  
  //gill3E
  curve(317,280,310,307,310,341,320,350);
  
  //gill3F
  curve(328,280,338,309,320,343,300,350);
  
  //gill3G
  curve(350,290,371,318,335,346,315,360);
  
  //gill3H
  curve(395,315,400,333,348,345,310,335);
  
  //gill3I
  curve(440,330,418,350,351,347,320,330);
  
  //gill3J
  curve(355,355,390,363,353,352,375,340);
  
}

function drawDirt(){
  beginShape();
  fill(77,51,50);
  noStroke();
  vertex(0,300);
  bezierVertex(0,300,229,150,550,425);
  vertex(550,800);
  vertex(0,800);
  endShape();
  
  beginShape();
  fill(77,51,50);
  vertex(551,426);
  vertex(800,501);
  vertex(800,800);
  vertex(400,800);
  
  endShape();
  
  beginShape();
  fill(128,79,79);
  stroke(77,51,50);
  vertex(550,425);
  bezierVertex(550,425,650,515,800,500);
  endShape();

}

function drawLight(){
  
  noStroke();
  fill(255,170,52,150);
  ellipse(35,800,125,125);
  
  fill(255,170,52,120);
  ellipse(35,800,300,300);
  
  fill(255,170,52,80);
  ellipse(35,800,575,575);
  
  fill(255,170,52,40);
  ellipse(35,800,925,925);
  
  fill(255,170,52,10);
  ellipse(35,800,1425,1425);
  
  fill(255,170,52,7);
  ellipse(35,800,1950,1950);
  
}
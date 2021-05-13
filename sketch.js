let vide, play, pause,fast,speed, inve, rese;
let rad;
let invet = false;
function setup() {
  createCanvas(500,500);
    vide = createVideo("Flat_Walking_Background.mp4");
  vide.position(0,0);
  play = createButton("Play");
  pause = createButton("Pause");
  rese = createButton("Reset");
  speed = createElement("h4","Speed");
  inve = createButton("Invert");
  fast = createSlider(1,7,1);
  speed.style("color","Blue");
  play.position(0,400);
  pause.position(50,400);
  fast.position(50,430);
  inve.position(110,400);
  rese.position(0,460);
  rese.size(300)
  speed.position(0,410);
  play.mousePressed(ply);
  pause.mousePressed(pose);
  inve.mousePressed(inver);
  rese.mousePressed(res);
}

function ply(){
  vide.loop();
  vide.play();
  
}
function pose(){
  vide.pause();
}
function draw(){
   let slide = fast.value();
   vide.speed(slide);
  if(invet){
    vide.hide();
    image(vide,0,0);
  filter(INVERT);
  }  
 }

function inver(){
  invet=true;
}
function res(){
  vide.show();
  invet = false;
}

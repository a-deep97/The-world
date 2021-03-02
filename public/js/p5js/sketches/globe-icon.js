

//rotation angle
let theta=0;
let globe_icon_container=document.querySelector('#globe-icon-container');

function setup() {
  let canvas=createCanvas(60,60,WEBGL);
  canvas.parent(globe_icon_container);
  canvas.elt.style.display="block";  
}

function preload() {
  img = loadImage('../../../img/globe-texture.JPG');
}

function draw() {

  background(255,255,255,0);
  push();
  rotateY(0.1*theta);
  texture(img);
  sphere(25);
  pop();
  theta+=0.05;
}
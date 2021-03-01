
//rotation angle
let theta=0;

function setup() {
  createCanvas(50,50, WEBGL);
}

function preload() {
  img = loadImage('../../public/img/globe_texture.jpg');
}

function draw() {
  push();
  rotateY(0.1*theta);
  texture(img);
  sphere(20,20,20);
  pop();
  theta+=0.05;
}
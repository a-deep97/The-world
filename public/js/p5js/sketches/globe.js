
//parent container of globe canvas
const globe_container=document.querySelector('#globe-container');

//global var
let globe_angle=0;
//setup function
function setup() {
    let canvas=createCanvas(700,700,WEBGL);
    canvas.parent(globe_container);
    canvas.elt.style.display="block";  
}
//preloading assets
function preload() {
    img = loadImage('../../../img/globe-day-texture-2k.JPG');
}
//looped draw function
function draw() {

    background(255,255,255,0);
    push();
    rotateY(0.2*globe_angle);
    texture(img);
    sphere(300,100,100);
    pop();
    globe_angle+=0.01;
}

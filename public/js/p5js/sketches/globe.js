
//parent container of globe canvas
const globe_container=document.querySelector('#globe-container');

function setup() {
    let canvas=createCanvas(700,700,WEBGL);
    canvas.parent(globe_container);
    canvas.elt.style.display="block";  
}
  
function preload() {
    img = loadImage('../../../img/globe-day-texture-2k.JPG');
}
  
function draw() {
    background(255,255,255,0);
    push();
    texture(img);
    sphere(300,100,100);
    pop();
}
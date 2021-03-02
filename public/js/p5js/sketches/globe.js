

var globe_sketch=function(sketch){

    //parent container of globe canvas
    const globe_container=document.querySelector('#globe-container');
    //global var
    let angle_y=0;

    sketch.setup=function(){
        let canvas=sketch.createCanvas(700,700,sketch.WEBGL);
        canvas.parent(globe_container);
        canvas.elt.style.display="block";
    };
    sketch.preload=function(){
        img = sketch.loadImage('../../../img/globe-day-texture-2k.JPG');    
    };
    sketch.draw=function(){
        sketch.angleMode(sketch.DEGREES);
        sketch.background(255,255,255,0);
        sketch.push();
        sketch.rotateY(angle_y);
        sketch.texture(img);
        sketch.sphere(300,100,100);
        sketch.pop();
        angle_y+=0.1;
    };
};
var globeSketch = new p5(globe_sketch);
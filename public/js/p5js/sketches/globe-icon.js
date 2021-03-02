

var globe_icon_sketch=function(sketch){

  //parent container of globe icon canvas
  let globe_icon_container=document.querySelector('#globe-icon-container');
  //global var
  let theta=0;

  sketch.setup=function(){
      let canvas=sketch.createCanvas(60,60,sketch.WEBGL);
      canvas.parent(globe_icon_container);
      canvas.elt.style.display="block";
  };
  sketch.preload=function(){
      img = sketch.loadImage('../../../img/globe-texture2.JPG');    
  };
  sketch.draw=function(){
      sketch.background(255,255,255,0);
      sketch.push();
      sketch.rotateY(0.1*theta);
      sketch.texture(img);
      sketch.sphere(25);
      sketch.pop();
      theta+=0.05;
  };
};
var globeIconSketch = new p5(globe_icon_sketch);

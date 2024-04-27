function setup() {
    canvas=createCanvas(280,280);
    canvas.position(250,250);
    background("white");
  }
  
  function preload() {
       classifier = ml5.imageClassifier('DoodleNet');
  }
  function draw() {
      strokeWeight(7);
      stroke("red");
      if(mouseIsPressed) {
         line(pmouseX,pmouseY,mouseX,mouseY);
      }
  }
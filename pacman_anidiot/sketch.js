var s = 30;
var maze;


function setup() {
  createCanvas(40*s,40*s);
  maze = new Maze(s);
     background(0);
  
}

function draw() {
  background(0);
 
  maze.show();
}



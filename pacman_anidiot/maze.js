class Maze{
    
    constructor(s){
//        this.grid = [[0,0],[1,0],[2,0]];
         
        this.s=s;
        this.y=10;
        this.x=5;
        this.l=1000;
        this.b=500;
        this.o=5;

    }
    
    show(){
        fill(0);
    strokeWeight(1);
    stroke('blue');
//    for (var i = 0; i < this.grid.length; i++) {
//      rect(this.grid[i][0]*s, this.grid[i][1]*s, s, s);
//    }
       
        noFill();
//        beginShape();
//        vertex(this.x,this.y);
//        vertex(this.l,this.y);
//        vertex(this.l,this.b);
//        vertex(this.x,this.b);
//        vertex(this.x,this.y);
//        endShape();
//        beginShape();
//        vertex(this.x+this.o,this.y+this.o);
//        vertex(this.l-this.o,this.y+this.o);
//        vertex(this.l-this.o,this.b-this.o);
//        vertex(this.x+this.o,this.b-this.o);
//        vertex(this.x+this.o,this.y+this.o);
//        endShape();
//        
//        
//         beginShape();
//        vertex(this.x+this.o,this.y+this.o);
//        vertex(this.l-this.o,this.y+this.o);
//        vertex(this.l-this.o,this.b-this.o);
//        vertex(this.x+this.o,this.b-this.o);
//        vertex(this.x+this.o,this.y+this.o);
//        endShape();
        
        rect(this.x,this.y,this.l,this.b);
        rect(this.x+this.o,this.y+this.o,this.l-2*this.o,this.b-2*this.o);
        //f
//        var s=5
        beginShape();
        vertex(130,100);
        vertex(200,100);
        vertex(200,120);
         vertex(150,120);
        vertex(150,130);
        vertex(200,130);
        vertex(200,150);
        vertex(150,150);
        vertex(150,250);
        vertex(130,250);
        vertex(130,100);
        
        endShape();
        var s=40;
         beginShape();
        rect(250,100,100,150);
        rect(250+s,100+s,100-2*s,150-2*s);
        endShape();
        
//        beginShape();
//       
//        vertex(400,100);
//         vertex(500,100);
//        vertex(500,140);
//        vertex(430,140);
//        vertex(430,140);
//        vertex(430,140);
//        vertex(430,160);
//        vertex(500,160);
//        vertex(500,250);
//        vertex(400,250);
//        vertex(400,210);
//        vertex(480,210);
//        vertex(480,190);
//        vertex(400,190);
//        vertex(400,100);
        endShape();
        
//         beginShape();
//       
//        vertex(400,100);
//         vertex(500,100);
//        vertex(500,140);
//        vertex(430,140);
//        vertex(430,140);
//        vertex(430,140);
//        vertex(430,160);
//        vertex(500,160);
//        vertex(500,250);
//        vertex(400,250);
//        vertex(400,210);
//        vertex(480,210);
//        vertex(480,190);
//        vertex(400,190);
//        vertex(400,100);
//        endShape();
        quad(400,100,500,100);
        

        
    }
}
class paper{
    constructor(x,y){
       
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x, y, circumference,options);
        this.circumference = width;
        

        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var radius=this.body.radius;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.circumference);
        pop();
      }
    };
    

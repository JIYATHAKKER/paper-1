class ground{
    constructor(x,y,width,height){  
        var options={
            'isStatic':true
        }

        this.ground=Bodies.rectangle(x,y,width,height,options);
        this.height=height;
        this.width=width;
        World.add(world,this.ground);
    }

    display(){
        var pos=this.ground.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}
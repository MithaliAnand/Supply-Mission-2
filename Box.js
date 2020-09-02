class Box {
        constructor(x,y,width,height){

    this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
    World.add(world,this.body);
    this.w = width;
    this.h = height;

        }
        display(){
            var pos = this.body.position;

            fill("red");
            rectMode(CENTER);
            rect(pos.x,pos.y,this.w,this.h);
        }
}
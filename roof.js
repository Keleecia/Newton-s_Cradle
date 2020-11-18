class Roof
{
    
    constructor(x,y,width,heigth)
    {
     var options =
     {
      isStatic:true
     }

     this.body = Bodies.rectangle(x,y,width,heigth,options);
     World.add(world,this.body);

     this.w = width;
     this.h = heigth;

    }

    display()
    {
     var pos = this.body.position;
     
     rect(pos.x,pos.y,this.w,this.h);
    }
}


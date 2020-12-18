class Paper{
constructor(x,y,Radius){
var option ={
    isStatic:false,
  restitution:0.3,
  friction:1.0,
   density:1.2
}
this.body=Bodies.circle(x,y,Radius,option);
this.Radius=Radius;
  World.add(world,this.body);
  this.image=loadImage("paper.png");
}
display(){
    var pos=this.body.position
    fill("blue");
   imageMode(CENTER);
   image(this.image,pos.x,pos.y,this.Radius);

}

}
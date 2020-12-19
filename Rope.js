class rope{

 constructor(bodyA,pointB){
    var options={
     bodyA: bodyA,
     pointB: pointB,
     stiffness: 0.05 ,
     length: 100
    }
    this.bodyA = bodyA;
    this.pointB = pointB;
    this.body = Matter.Constraint.create(options);
    World.add(world,this.body);
 }
display(){

  line(this.body.bodyA.position.x,this.body.bodyA.position.y,
       this.body.pointB.x,this.body.pointB.y);

}

}
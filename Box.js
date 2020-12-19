class box{
   constructor(x,y){
     var options={
        restitution: 0.5,
        density: 0.3,
        friction: 1
     }  
    
     this.body = Bodies.rectangle(x,y,80,80,options);
     World.add(world,this.body);
   }
   display(){
      
      
      var pos = this.body.position
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      stroke("red");
      strokeWeight(3);
      rectMode(CENTER);
      rect(pos.x,pos.y,80,80);
      pop();
   }

}
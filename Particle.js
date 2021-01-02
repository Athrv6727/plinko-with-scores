class Particle{
    constructor(x, y, r, angle) {
        var options = {
            isStatic:false,
            frictionAir:0.005,
            density:1.0
        }
        this.body = Bodies(x, y,this.r, options);
        this.r=r
        this.color=this.color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipse(0,0,this.width,this.height)
        pop();
      }
}

class SlingShot{
    constructor(bodyA,bodyB) {
        var options = {
            bodyA: bodyA,
            pointB: bodyB,
            stiffness: 0.04,
            length:10
        }
        this.sling = Constraint.create(options);
        this.pointB = bodyB;
        World.add(world, this.sling);
      }
      display(){
        var pointA = this.sling.bodyA.position;
        //var pointB = this.sling.bodyB.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
      }
}

// HI, COuld you please upload the files to github and share the repository link?
//ok
//what is the issue ??
//it is not fixed right ?

// yes there is something else too.
// which needs to be fixed
//oh give me  a moment
//i will upload into git
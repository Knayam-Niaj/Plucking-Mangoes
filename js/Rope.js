class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.body = Constraint.create(options);
        
        World.add(world, this.body);
    }

    display(){
        
        var pointA = this.bodyA.position;
        var Bpoint = this.pointB;
        strokeWeight(2);
        line(pointA.x, pointA.y, Bpoint.x, Bpoint.y);
    }
}


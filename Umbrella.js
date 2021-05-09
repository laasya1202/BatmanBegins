class Umbrella{
    constructor(x, y){
        var options = {
            isStatic:true,
            restitution:0.2,
            friction:0.1,
        }
        this.body =Bodies.circle(x, y, 50,options)
        this.image = loadImage("Walking Frame/walking_1.png")
        World.add(world, this.body)
    }
    
    display(){
      
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, 100, 100)
    }
}
class Drop {
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 0.2,
            friction: 0.1,
            density: 0.5
        }
        this.body = Bodies.circle(x, y, 3, options)
        World.add(world, this.body)
    }

    update() {
        if (this.body.position.y > height) {
            Matter.Body.setPosition(this.body, { x: random(0, 400), y: random(0, 400) })
        }
    }

    display() {
        ellipseMode(RADIUS);
        fill("blue")
        ellipse(this.body.position.x, this.body.position.y, 3, 3)
    }
}
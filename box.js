class Box {
    constructor(x, y, width, height) {
        this.body = Bodies.rectangle(x, y, width, height)
        this.width = width
        this.height = height
        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}
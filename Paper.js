class Paper {
  constructor(x, y, radius) {
    var options = {
      isStatic: false,
      'restitution':0.3,
      'friction':0.0,
      'density':1.2
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.image = loadImage("paper.png");
    this.radius = radius
      
    World.add(world, this.body);
    }
  display(){
    imageMode(RADIUS);
    image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
  }
}
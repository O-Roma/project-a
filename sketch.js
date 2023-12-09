let movers = [];

function setup() {
  createCanvas(640, 360);
  background(255);
  for (let i = 0; i < 20; i++) {
    movers[i] = new Mover();
  }
}

function draw() {
  background(255);

  for (let i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].checkEdges();
    movers[i].display();
  }
}

class Mover {
  constructor() {
    this.location = createVector(random(width), random(height));
    this.velocity = createVector(0, 0);
    this.acceleration = createVector();
    this.topspeed = 4;
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(mouse, this.location);
    dir.normalize();
    dir.mult(0.5);
    this.acceleration = dir;

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.location.add(this.velocity);
  }

  display() {
    stroke(0);
    fill(175);
    ellipse(this.location.x, this.location.y, 16, 16);
  }

  checkEdges() {
    if (this.location.x > width) {
      this.location.x = 0;
    } else if (this.location.x < 0) {
      this.location.x = width;
    }

    if (this.location.y > height) {
      this.location.y = 0;
    } else if (this.location.y < 0) {
      this.location.y = height;
    }
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get diameter() {
    return 2 * this.radius;
  }
  set diameter(number) {
    this.radius = number/2;
  }
  get circumference() {
    return Math.PI * this.diameter;
  }
  set circumference(number) {
    this.radius = number/(Math.PI * 2);
  }
  get area() {
    return Math.PI * this.radius ** 2;
  }
  set area(number) {
    this.radius = Math.sqrt(number/Math.PI);
  }
}

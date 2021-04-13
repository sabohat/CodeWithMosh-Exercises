// Task: creating an circle object that has a setter for the radius
// and read-only area property

const circle = {
  radius: 2,
  get area() {
    return Math.PI * this.radius * this.radius
  },
  set setRadius(value) {
    this.radius = value;
  }
}
console.log(circle.area) // 12.566...
circle.setRadius = 3
console.log(circle.area) // 28.74....

// Conclusion from the exercise and mistakes:
// do not name setter and getter function with the same name as your variables (keys) inside the object

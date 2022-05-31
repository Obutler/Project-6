class Shape {
  constructor(sides = []) {
    this.sides = sides;
  }
  perimeter = () => {
    return this.sides.length > 0
      ? this.sides.reduce((acc, side) => acc + side, 0)
      : 0;
  };
}

class Rectangle extends Shape {
  constructor(length = 0, width = 0) {
    super([length, width, length, width]); // super grabs the value from the constructor of Shape.
    this.length = length;
    this.width = width;
  }
  area = () => {
    return this.length * this.width;
  };
}

class Triangle extends Shape {
  constructor(sideA = 0, sideB = 0, sideC = 0) {
    super([sideA, sideB, sideC]); //super must go before this. statements.
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  area = () => {
    let s = (this.sideA + this.sideB + this.sideC) / 2;
    return Math.sqrt(
      s * ((s - this.sideA) * (s - this.sideB) * (s - this.sideC))
    );
  };
}

// Array of sides arrays
const data = [[3, 4], [5, 5], [3, 4, 5], [10], []];

for (const sides of data) {
  let description = "";
  let shape = null;

  switch (sides.length) {
    case 2:
      description = "Rectangle";
      if (sides[0] === sides[1]) {
        description = "Square";
      }
      shape = new Rectangle(...sides);
      break;
    case 3:
      description = "Triangle";
      shape = new Triangle(...sides);
      break;
    default:
      break;
  }
  if (description.length > 0) {
    console.log(
      `${description} with sides ${sides.toString()}` +
        ` has perimeter of ${shape.perimeter()}` +
        ` and area of ${shape.area()}`
    );
  } else {
    const plural = sides.length !== 1 ? "s" : "";
    console.log(`Shape with ${sides.length} side${plural} unsupported`);
  }
}

class Rectangle {
  // Coordinates of bottom-left corner
  leftX: number;
  bottomY: number;

  // Width and height
  width: number;
  height: number;
  constructor(x: number, y: number, w: number, h: number) {
    this.leftX = x;
    this.bottomY = y;
    this.width = w;
    this.height = h;
  }
}

const findRectangleIntersection = (
  rectA: Rectangle,
  rectB: Rectangle
): Rectangle => {
  const isRectATopRightInside: boolean =
    rectA.leftX + rectA.width > rectB.leftX &&
    rectA.leftX + rectA.width < rectB.leftX + rectB.width &&
    rectA.bottomY + rectA.height > rectB.bottomY &&
    rectA.bottomY + rectA.height < rectB.bottomY + rectB.bottomY;

  console.log(isRectATopRightInside);

  return new Rectangle(0, 0, 0, 0);
};

const rect1 = new Rectangle(0, 0, 10, 10);
const rect2 = new Rectangle(5, 5, 10, 10);
console.log(findRectangleIntersection(rect1, rect2));

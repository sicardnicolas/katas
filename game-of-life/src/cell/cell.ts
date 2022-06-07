export class Cell {
  private readonly x: number;
  private readonly y: number;

  constructor(x: number, y: number) {
    if (x < 0) {
      throw new Error(`Cell constructor: Invalid x value "${x}"`);
    }
    if (y < 0) {
      throw new Error(`Cell constructor: Invalid y value "${y}"`);
    }
    this.x = x;
    this.y = y;
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }
}

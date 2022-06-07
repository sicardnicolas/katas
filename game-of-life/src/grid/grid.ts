const WIDTH = 25;
const HEIGHT = 25;

export class Grid {
  private readonly width: number;
  private readonly height: number;

  constructor() {
    this.width = WIDTH;
    this.height = HEIGHT;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }
}

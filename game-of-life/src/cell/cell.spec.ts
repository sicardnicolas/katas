import { Cell } from "./cell";

describe("Cell", () => {
  describe("constructor", () => {
    it("fails to build a cell if x is below zero", () => {
      expect(() => new Cell(-1, 0)).toThrow(
        Error('Cell constructor: Invalid x value "-1"')
      );
    });

    it("fails to build a cell if y is below zero", () => {
      expect(() => new Cell(0, -13)).toThrow(
        Error('Cell constructor: Invalid y value "-13"')
      );
    });

    it.each([
      { x: 0, y: 0 },
      { x: 13, y: 66 },
    ])('creates a Cell for a x "$x" and a y "$y"', ({ x, y }) => {
      expect(() => new Cell(x, y)).not.toThrow();
    });
  });

  describe("getX", () => {
    it("gets the value of x of the cell", () => {
      const cell = new Cell(10, 50);

      expect(cell.getX()).toBe(10);
    });
  });

  describe("getY", () => {
    it("gets the value of y of the cell", () => {
      const cell = new Cell(10, 50);

      expect(cell.getY()).toBe(50);
    });
  });
});

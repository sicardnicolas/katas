import { Grid } from "./grid";

describe("Grid", () => {
  describe("getWidth", () => {
    it("gets the height of the grid which is 25", () => {
      expect(new Grid().getWidth()).toBe(25);
    });
  });

  describe("getHeight", () => {
    it("gets the height of the grid which is 25", () => {
      expect(new Grid().getHeight()).toBe(25);
    });
  });
});

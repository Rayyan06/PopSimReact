import { FOOD_COLOR } from "./constants.js";

export default class Food {
  static color = FOOD_COLOR;
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.neighbors = 0;
  }
  draw(ctx, board) {
    //ctx.fillStyle = Food.color;
    ctx.fillStyle = Food.color;
    ctx.fillRect(
      this.x * board.squareSize,
      this.y * board.squareSize,
      board.squareSize,
      board.squareSize
    );
  }

  isCloseTo(otherFood) {
    if (this == otherFood) {
      return;
    }
    return (Math.abs(this.x - otherFood.x) <= 1 ) && (Math.abs(this.y - otherFood.y <=1));
  }
}

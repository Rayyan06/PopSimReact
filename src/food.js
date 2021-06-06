import { FOOD_COLOR } from "./constants.js";

export default class Food {
  static color = FOOD_COLOR;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw(ctx, board) {
    ctx.fillStyle = Food.color;
    ctx.fillRect(
      this.x * board.squareSize,
      this.y * board.squareSize,
      board.squareSize,
      board.squareSize
    );
  }
}

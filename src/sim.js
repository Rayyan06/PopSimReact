import {
  FOOD_COLOR,
  NUM_X,
  NUM_Y,
  SQ_SIZE,
  STARTING_FOOD
} from "./constants.js";

import Board from "./board.js";
import { getRandomInt } from "./utility.js";

class Food {
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

const board = new Board(NUM_X, NUM_Y, SQ_SIZE);

let foods = [];
function createFoods() {
  for (let i = 0; i < STARTING_FOOD; i++) {
    let food = new Food(getRandomInt(0, NUM_X), getRandomInt(0, NUM_Y));
    foods.push(food);
  }
}

function setup(ctx) {
  ctx.canvas.width = board.width;
  ctx.canvas.height = board.height;

  createFoods();
}
function draw(ctx, frameCount) {
  board.drawGrid(ctx);

  ctx.fillStyle = "blue";

  foods.forEach((food) => {
    food.draw(ctx, board);
  });
}

module.exports = {
  draw,
  setup
};

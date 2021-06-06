import { NUM_X, NUM_Y, SQ_SIZE, STARTING_FOODS } from "./constants.js";
import Board from "./board.js";
import Food from "./food.js";

import { getRandomInt } from "./utility.js";

export default class Simulator {
  constructor() {
    this.board = new Board(NUM_X, NUM_Y, SQ_SIZE);
    this.foods = [];
  }

  createFoods(foods) {
    for (let i = 0; i < STARTING_FOODS; i++) {
      let food = new Food(getRandomInt(0, NUM_X), getRandomInt(0, NUM_Y));
      foods.push(food);
    }
  }

  setup(ctx) {
    ctx.canvas.width = this.board.width;
    ctx.canvas.height = this.board.height;

    this.createFoods(this.foods);
  }

  draw(ctx, frameCount) {
    this.board.drawGrid(ctx);

    ctx.fillStyle = "blue";

    this.foods.forEach((food) => {
      food.draw(ctx, this.board);
    });
  }
}

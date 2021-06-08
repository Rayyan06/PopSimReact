import { NUM_X, NUM_Y, SQ_SIZE, STARTING_FOODS, NUM_NEIGHBORS_THRESHOLD } from "./constants.js";
import Board from "./board.js";
import Food from "./food.js";

import { getRandomInt } from "./utility.js";

export default class Simulator {
  constructor() {
    this.board = new Board(NUM_X, NUM_Y, SQ_SIZE);
    this.foods = [];
    this.deletedFoods = [];
  }

  createFoods() {
    for (let i = 0; i < STARTING_FOODS; i++) {
      let food = new Food(getRandomInt(0, NUM_X), getRandomInt(0, NUM_Y));
      this.foods.push(food);
    }
  }

  setup(ctx) {
    ctx.canvas.width = this.board.width;
    ctx.canvas.height = this.board.height;

    this.createFoods(this.foods);
  }
  killFoods() {
    for (let food of this.foods) {
      for(let otherFood of this.foods) {
        if (food.isCloseTo(otherFood)) {
          food.neighbors++;
        }
      }
      if (food.neighbors >= NUM_NEIGHBORS_THRESHOLD) {
        this.deletedFoods.push(food);
      }
    }
    
    this.foods = this.foods.filter(food => !this.deletedFoods.includes(food));
  }
  update() {
    this.killFoods();
  }

  draw(ctx) {
    this.board.drawGrid(ctx);

    this.foods.forEach((food) => {
      food.draw(ctx, this.board);
    });
    
    this.update();
  }
}

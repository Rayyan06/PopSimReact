import Simulator from "./sim.js";
import Board from "./board.js";
import Food from "./food.js"

import { ctx } from "./mockCtx.js";
import { STARTING_FOODS, NUM_X, NUM_Y, SQ_SIZE, NUM_NEIGHBORS_THRESHOLD } from "./constants.js";

jest.mock("./board.js")
jest.mock("./food.js")



describe("Simulator", () => {

  beforeEach(() => {
    Board.mockClear();
    Food.mockClear();
  });

  it("check if the Simulator called the board constructor and worked properly", () => {
    const simulator = new Simulator();
    expect(Board).toHaveBeenCalledWith(NUM_X, NUM_Y, SQ_SIZE);
    expect(simulator.foods).toBeDefined();
    expect(simulator.deletedFoods).toBeDefined();

  });


  it('should create STARTING_FOODS food in createFoods', () => {
    const simulator = new Simulator();
    expect(Food).not.toHaveBeenCalled();
    simulator.createFoods();
    expect(Food).toHaveBeenCalledTimes(STARTING_FOODS);
    expect(simulator.foods).toHaveLength(STARTING_FOODS);
  });

  it('should kill food when they have too many neighbors', () => {
    const simulator = new Simulator();
    let food;
    for (let i = 0; i < NUM_NEIGHBORS_THRESHOLD + 10; i++) {
      food = new Food(1, 1);
      simulator.foods.push(food);
    }
    expect(simulator.foods.length).toBeGreaterThan(NUM_NEIGHBORS_THRESHOLD);
    simulator.update();

    expect(simulator.deletedFoods.length).toBeGreaterThan(0);
  
  })
  it('should not kill food when they dont have too many neighbours', () => {
    const simulator = new Simulator();
    let food;
    for (let i = 0; i < NUM_NEIGHBORS_THRESHOLD - 5; i++) {
      food = new Food(1, 1);
      simulator.foods.push(food);
    }
    simulator.update();

    expect(simulator.deletedFoods.length).toBeFalsy();
  
  })
  test("setup", () => {
    expect(Board).not.toHaveBeenCalled();
    const simulator = new Simulator();
    const createFoodsSpy = jest.spyOn(simulator, 'createFoods');


    simulator.setup(ctx);
    expect(ctx.canvas.width).toBe(simulator.board.width);
    expect(ctx.canvas.height).toBe(simulator.board.height);
    expect(createFoodsSpy).toHaveBeenCalled();
  });

  test("draw", () => {
    const simulator = new Simulator();
    simulator.createFoods();
    simulator.draw(ctx);
    let drawFood;
    for(let food of simulator.foods) {
      drawFood = jest.spyOn(food, 'draw');
      expect(drawFood).toHaveBeenCalledWith(ctx, simulator.board)
    }
  
  })
})



/*

describe("food", () => {
  test("there should spawn correct number of foods", () => {
    let foods = [];
    createFoods(foods);
    expect(foods).toHaveLength(STARTING_FOODS);
  });
  it("should draw the food in the correct location", () => {});
  it.todo("should reproduce itself under normal conditions");
});


*/

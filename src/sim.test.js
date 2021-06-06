import Simulator from "./sim.js";
import Board from "./board.js";

import { ctx } from "./mockCtx.js";
import { STARTING_FOODS, NUM_X, NUM_Y, SQ_SIZE } from "./constants.js";

jest.mock("./sim.js");

beforeEach(() => {
  Simulator.mockClear();
});

it("check if the Simulator called the board constructor", () => {
  const simulator = new Simulator();
  expect(Board).toHaveBeenCalled();
});

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

test("setup", () => {
  const board = new Board(NUM_X, NUM_Y, SQ_SIZE);
  setup(ctx);
  expect(ctx.canvas.width).toBe(board.width);
  expect(ctx.canvas.height).toBe(board.height);
  expect(createFoods).toHaveBeenCalled();
});
*/

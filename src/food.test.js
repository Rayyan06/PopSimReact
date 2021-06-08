import Food from "./food.js"
import Board from "./board.js"
import { ctx } from "./mockCtx.js"
import { NUM_X, NUM_Y, SQ_SIZE, NUM_NEIGHBORS_THRESHOLD} from "./constants.js";

describe("food", () => {
    it('check if the constructor works properly', () => {
        const food = new Food(3, 5);
        expect(food.x).toEqual(3);
        expect(food.y).toEqual(5);
        expect(food.neighbors).toBe(0);
    })

    it('check if the draw method works correctly', () => {  
        const food = new Food(3, 5);
        const board = new Board(NUM_X, NUM_Y, SQ_SIZE);
        food.draw(ctx, board);
        expect(ctx.fillStyle).toBe(Food.color);
        expect(ctx.fillRect).toHaveBeenCalled();
    })

    it("check if the isCloseTo method works correctly for close objects", () => {
        const food = new Food(3, 5);
        const otherFood = new Food(4, 6);

        expect(food.isCloseTo(otherFood)).toBeTruthy()
        expect(otherFood.isCloseTo(food)).toBeTruthy();
    })

    it("check if the isCloseTo method works correctly for far objects", () => {
        const food = new Food(3, 5);
        const otherFood = new Food(5, 6);

        expect(food.isCloseTo(otherFood)).toBeFalsy()
        expect(otherFood.isCloseTo(food)).toBeFalsy();
    })

})
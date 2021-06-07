import Food from "./food.js"
import Board from "./board.js"
import { ctx } from "./mockCtx.js"
import { NUM_X, NUM_Y, SQ_SIZE} from "./constants.js";

it('check if the constructor works properly', () => {
    const food = new Food(3, 5);
    expect(food.x).toEqual(3);
    expect(food.y).toEqual(5);
})

it('check if the draw method works correctly', () => {  
    const food = new Food(3, 5);
    const board = new Board(NUM_X, NUM_Y, SQ_SIZE);
    food.draw(ctx, board);
    expect(ctx.fillStyle).toBe(Food.color);
    expect(ctx.fillRect).toHaveBeenCalled();
})
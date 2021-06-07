import Board from "./board.js";
import { NUM_X, NUM_Y, SQ_SIZE } from "./constants.js";
import { ctx } from "./mockCtx.js";


describe("board", () => {
  let board;

  beforeAll(() => {
    board = new Board(NUM_X, NUM_Y, SQ_SIZE);
  });
  it("should be the correct width and height", () => {
    expect(board.width).toEqual(board.numX * board.squareSize);
    expect(board.height).toEqual(board.numY * board.squareSize);
  });

  it("should draw the lines in the grid correctly", () => {
    board.drawGrid(ctx);
    for (let i = 0; i < NUM_X; i++) {
      expect(ctx.moveTo).toHaveBeenCalledWith(i * SQ_SIZE, 0);
      expect(ctx.lineTo).toHaveBeenCalledWith(i * SQ_SIZE, NUM_Y * SQ_SIZE);
    }

    for (let j = 0; j < NUM_Y; j++) {
      expect(ctx.moveTo).toHaveBeenCalledWith(0, j * SQ_SIZE);
      expect(ctx.lineTo).toHaveBeenCalledWith(NUM_X * SQ_SIZE, j * SQ_SIZE);
    }

    expect(ctx.stroke).toHaveBeenCalled();
  });
});


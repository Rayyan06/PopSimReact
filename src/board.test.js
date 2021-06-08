import Board from "./board.js";
import { NUM_X, NUM_Y, SQ_SIZE } from "./constants.js";
import { ctx } from "./mockCtx.js";


describe("board", () => {
  let board;

  beforeAll(() => {
    board = new Board(NUM_X, NUM_Y, SQ_SIZE);
  });

  it("Should have it's constructor work", ()=> {
    expect(board.numX).toBe(NUM_X);
    expect(board.numY).toBe(NUM_Y);
    expect(board.squareSize).toBe(SQ_SIZE);
    
  });
  
  it("should draw the lines in the grid correctly", () => {
    let i = 6;
    let j = 5;

    board.drawGrid(ctx);
    expect(ctx.moveTo).toHaveBeenCalledWith(i * SQ_SIZE, 0);
    expect(ctx.lineTo).toHaveBeenCalledWith(i * SQ_SIZE, NUM_Y * SQ_SIZE);
    

    expect(ctx.moveTo).toHaveBeenCalledWith(0, j * SQ_SIZE);
    expect(ctx.lineTo).toHaveBeenCalledWith(NUM_X * SQ_SIZE, j * SQ_SIZE);
    

    expect(ctx.stroke).toHaveBeenCalled();
  });
});

/*
describe("board", () => {

  it("should be the correct width and height", () => {
    expect(board.width).toEqual(board.numX * board.squareSize);
    expect(board.height).toEqual(board.numY * board.squareSize);
  });

});

*/
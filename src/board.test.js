import Board from "./board.js";

describe("board", () => {
  it("should be the correct width and height", () => {
    const board = new Board(10, 10, 20);
    expect(board.width).toEqual(board.numX * board.squareSize);
    expect(board.height).toEqual(board.numY * board.squareSize);
  });
});

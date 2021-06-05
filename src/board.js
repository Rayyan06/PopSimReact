class Board {
  constructor(numX, numY, squareSize) {
    this.numX = numX;
    this.numY = numY;
    this.squareSize = squareSize;
    this.width = numX * squareSize;
    this.height = numY * squareSize;
  }
  drawGrid(ctx) {
    for (let i = 0; i <= this.numX; ++i) {
      ctx.moveTo(i * this.squareSize, 0);
      ctx.lineTo(i * this.squareSize, this.height);
    }
    for (let j = 0; j <= this.numY; ++j) {
      ctx.moveTo(0, j * this.squareSize);
      ctx.lineTo(this.width, j * this.squareSize);
    }
    ctx.stroke();
  }
}

export default Board;

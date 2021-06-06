import { jest } from "@jest/globals";

export const ctx = {
  moveTo: jest.fn(),
  lineTo: jest.fn(),
  fillRect: jest.fn(),
  fillStyle: "",
  stroke: jest.fn(),
  canvas: {
    width: 0,
    height: 0
  }
};

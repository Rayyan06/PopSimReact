import { getRandomInt } from "./utility.js";

test("getRandomInt should return a random number in between the min and max inclusive", () => {
  let num = getRandomInt(0, 100);
  expect(num).toBeGreaterThanOrEqual(0);
  expect(num).toBeLessThanOrEqual(100);
});

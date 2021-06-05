import React from "react";
import useCanvas from "./useCanvas";
import { draw, setup } from "./sim.js";

const predraw = (context) => {
  const { width, height } = context.canvas;
  context.clearRect(0, 0, width, height);
};
const postdraw = () => {};

const Simulation = (props) => {
  const canvasRef = useCanvas(draw, { predraw, postdraw }, setup);

  return <canvas ref={canvasRef} {...props} />;
};

export default Simulation;

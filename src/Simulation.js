import React from "react";
import useCanvas from "./useCanvas";
import Simulator from "./sim.js";

const predraw = (context) => {
  const { width, height } = context.canvas;
  context.clearRect(0, 0, width, height);
};
const postdraw = () => {};

const simulator = new Simulator();
const Simulation = (props) => {
  const canvasRef = useCanvas(simulator, { predraw, postdraw });

  return <canvas ref={canvasRef} {...props} />;
};

export default Simulation;

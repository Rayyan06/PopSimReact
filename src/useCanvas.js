import { useRef, useEffect } from "react";

const useCanvas = (Simulator, { predraw, postdraw }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    Simulator.setup(context);
  }, [Simulator]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    const render = () => {
      predraw(context);
      frameCount++;
      Simulator.draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
      postdraw();
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [Simulator, predraw, postdraw]);

  return canvasRef;
};

export default useCanvas;

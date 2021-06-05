import { useRef, useEffect } from "react";

const useCanvas = (draw, { predraw, postdraw }, setup) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    setup(context);
  }, [setup]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    const render = () => {
      predraw(context);
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
      postdraw();
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw, predraw, postdraw]);

  return canvasRef;
};

export default useCanvas;

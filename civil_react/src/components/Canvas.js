import React, { useRef, useEffect } from 'react';

function CanvasComponent() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Drawing code here using the canvas 2D API
    context.fillStyle = 'red';
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  return <canvas ref={canvasRef} width={400} height={400} />;
}

export default CanvasComponent;

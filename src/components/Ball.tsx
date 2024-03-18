import React, { useEffect, useRef, useState } from "react";

export interface BallProps {
  id: number;
  x: number;
  y: number;
  radius: number;
  color: string;
  onMove: (newX: number, newY: number) => void;
}

const Ball: React.FC<BallProps> = ({ x, y, radius, color, onMove }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleMouseDown = () => {
      setIsDragging(true);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
    
      const rect = canvas.getBoundingClientRect();
      const newX = event.clientX - rect.left - window.pageXOffset;
      const newY = event.clientY - rect.top - window.pageYOffset;
    
      onMove(newX, newY);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
    };
  }, [x, y, radius, color, isDragging, onMove]);

  return <canvas ref={canvasRef} width={800} height={600} />;
};

export default Ball;

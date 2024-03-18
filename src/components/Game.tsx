import React from "react";
import Ball, { BallProps } from "./Ball";

const Game: React.FC = () => {
  const handleBallMove = React.useCallback((newX: number, newY: number) => {
    console.log(`Перемещение шара на (${newX}, ${newY})`);
  }, []);

  const balls: BallProps[] = [
    {
      id: 1,
      x: 100,
      y: 100,
      radius: 20,
      color: 'red',
      onMove: handleBallMove
    },
    {
      id: 2,
      x: 200,
      y: 200,
      radius: 30,
      color: 'blue',
      onMove: handleBallMove
    },
    {
      id: 3,
      x: 300,
      y: 300,
      radius: 40,
      color: 'green',
      onMove: handleBallMove
    },
  ];

  return (
    <div>
      {balls.map(ball => (
        <Ball
          key={ball.id}
          data-testid={`ball-${ball.id}`}
          id={ball.id}
          x={ball.x}
          y={ball.y}
          radius={ball.radius}
          color={ball.color}
          onMove={ball.onMove}
        />
      ))}
    </div>
  );
};

export default Game;

import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect } from '@testing-library/jest-dom/extend-expect';
import Game from './Game';

test('renders balls in the game', () => {
  render(<Game />);
  
  const gameElement = screen.getByTestId('game') as HTMLElement;
  expect(gameElement).toBeInTheDocument();

  const ball1 = screen.getByTestId('ball-1') as HTMLElement;
  const ball2 = screen.getByTestId('ball-2') as HTMLElement;
  const ball3 = screen.getByTestId('ball-3') as HTMLElement;
  expect(ball1).toBeInTheDocument();
  expect(ball2).toBeInTheDocument();
  expect(ball3).toBeInTheDocument();
});

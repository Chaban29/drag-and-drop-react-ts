import { FC } from 'react';
import './background.css';

interface IPosition {
  position: { x: number; y: number };
}

export const Background: FC<IPosition> = ({ position }: IPosition) => {
  return (
    <div
      className='background__box'
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    />
  );
};

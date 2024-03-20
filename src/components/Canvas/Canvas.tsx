import { FC, ChangeEvent, useState } from 'react';
import './canvas.css';
import { Background } from '../Background/Background';
import { Box } from '../Box/Box';

interface IInitialPosition {
  color: string;
  position: { x: number; y: number };
}

export const Canvas: FC = () => {
  const [shape, setShape] = useState<IInitialPosition>({
    color: 'orange',
    position: { x: 0, y: 0 },
  });

  const handleMove = (dx: number, dy: number): void => {
    shape.position.x += dx;
    shape.position.y += dy;
  };

  const handleColorChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setShape((prevShape) => ({
      ...prevShape,
      color: event.target.value,
    }));
  };

  return (
    <div>
      <select value={shape.color} onChange={handleColorChange}>
        <option value='orange'>orange</option>
        <option value='lightpink'>lightpink</option>
        <option value='aliceblue'>aliceblue</option>
      </select>
      <Background position={{ x: 0, y: 0 }} />
      <Box color={shape.color} position={shape.position} onMove={handleMove}>
        Drag Square!
      </Box>
    </div>
  );
};

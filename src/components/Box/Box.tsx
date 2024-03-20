import { FC, PointerEventHandler, ReactNode, useState } from 'react';
import './box.css';

interface IBox {
  children: ReactNode;
  position: { x: number; y: number };
  color: string;
  onMove: (dx: number, dy: number) => void;
}

export const Box: FC<IBox> = ({ children, position, color, onMove }: IBox) => {
  const [lastCoordinates, setLastCoordinates] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handlerPointerDown: PointerEventHandler<HTMLDivElement> = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setLastCoordinates({ x: event.clientX, y: event.clientY });
  };

  const handlePointerMove: PointerEventHandler<HTMLDivElement> = (event) => {
    if (lastCoordinates) {
      const dx = event.clientX - lastCoordinates.x;
      const dy = event.clientY - lastCoordinates.y;
      setLastCoordinates({ x: event.clientX, y: event.clientY });
      onMove(dx, dy);
    }
  };

  const handlePointerUp: PointerEventHandler<HTMLDivElement> = () => {
    setLastCoordinates(null);
  };

  return (
    <div
      onPointerDown={handlerPointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className='box__container'
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        background: color,
      }}
    >
      {children}
    </div>
  );
};

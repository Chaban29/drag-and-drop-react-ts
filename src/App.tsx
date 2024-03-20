import { FC } from 'react';
import { Canvas } from './components/Canvas/Canvas';

interface IStyle {
  fontFamily: string;
  fontWeight: number;
}

export const App: FC<IStyle> = ({ fontFamily, fontWeight }: IStyle) => {
  return (
    <div style={{ fontFamily: fontFamily, fontWeight: fontWeight }}>
      <Canvas />
    </div>
  );
};

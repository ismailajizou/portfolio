'use client';
import type {
  IParallaxLayer,
  ParallaxLayerProps,
} from '@react-spring/parallax';
import { ParallaxLayer } from '@react-spring/parallax';
import type { FC } from 'react';

type Props = ParallaxLayerProps & React.RefAttributes<IParallaxLayer>;

const Panel: FC<Props> = ({ children, offset, speed, ...props }) => {
  return (
    <ParallaxLayer offset={offset} speed={speed} {...props}>
      {children}
    </ParallaxLayer>
  );
};
export default Panel;

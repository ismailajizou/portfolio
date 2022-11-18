import {
  IParallaxLayer,
  ParallaxLayer,
  ParallaxLayerProps,
} from '@react-spring/parallax';
import { FC } from 'react';

type Props = ParallaxLayerProps & React.RefAttributes<IParallaxLayer>;

const Panel: FC<Props> = ({ children, offset, speed, ...props }) => {
  return (
    <ParallaxLayer offset={offset} speed={speed} {...props}>
      {children}
    </ParallaxLayer>
  );
};
export default Panel;

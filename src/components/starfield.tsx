import React from 'react';
import { StarField } from './ReactStarField';
import { useWindowSize } from 'react-use';
import { useReducedMotion } from 'framer-motion';

const Starfield: React.FC<any> = ({ speed }) => {
  const { width, height } = useWindowSize();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="starfield">
      {mounted && (
        <StarField
          fps={60}
          width={width}
          height={height}
          speed={shouldReduceMotion ? 0 : speed}
          noBackground
        />
      )}
    </div>
  );
};

export default Starfield;

import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold });
  const [hasAnimated, setHasAnimated] = useState(false);

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  return { ref, isInView, hasAnimated };
};

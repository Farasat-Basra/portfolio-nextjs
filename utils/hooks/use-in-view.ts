import React, { useEffect, useRef, useState } from "react";

export const useInView = () => {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const element = ref.current;
      window.onscroll = () => {
        const top = element.offsetTop;
        if (scrollY >= top) {
          setIsInView(true);
        } else setIsInView(false);
      };
    }
  }, [ref]);
  return { ref, isInView };
};

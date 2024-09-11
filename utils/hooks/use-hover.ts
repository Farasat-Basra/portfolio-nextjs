import { useState } from "react";

export const useHover = () => {
  const [isHover, setIsHover] = useState(false);
  const mouseUp = () => setIsHover(false);
  const mouseDown = () => setIsHover(true);

  return { isHover, mouseUp, mouseDown };
};

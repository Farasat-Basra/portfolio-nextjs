import { useEffect, useState } from "react";

export const useScroll = (yLimit = 67.2) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > yLimit) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled, yLimit]);

  return [isScrolled, setIsScrolled];
};

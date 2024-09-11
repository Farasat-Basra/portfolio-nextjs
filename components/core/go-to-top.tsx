"use client";
import { IconArrowUp } from "@tabler/icons-react";
import { Button } from "../ui/button";
import { useScroll } from "@/utils/hooks";

const SHOW_VALUE = 400;

const GoToTop = () => {
  const [isScrolled] = useScroll(SHOW_VALUE);

  const handleGoTop = () => {
    window.scrollTo({ top: 0 });
  };

  if (!isScrolled) return null;
  return (
    <div
      className="fixed bottom-10 right-10 hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-300"
      title="Go To Top"
    >
      <Button
        className="shadow-btn focus:scale-75 transition-transform duration-300"
        onClick={handleGoTop}
        variant="invert"
        size="icon"
        rounded
      >
        <IconArrowUp />
      </Button>
    </div>
  );
};

export default GoToTop;

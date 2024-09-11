import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useActiveSection = () => {
  const [ref, inView] = useInView({ threshold: [0.6] });
  return { ref, inView };
};

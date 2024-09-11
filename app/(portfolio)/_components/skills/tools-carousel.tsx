import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { EmblaOptionsType } from "embla-carousel";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

import { IconYarn } from "@/components/icons/Yarn";
import { IconNpm } from "@/components/icons/Npm";
import { IconPnpm } from "@/components/icons/Pnpm";
import { IconVite } from "@/components/icons/Vite";
import { IconWebpack } from "@/components/icons/WebPack";
import { IconBabel } from "@/components/icons/Babel";
import { IconGit } from "@/components/icons/Git";

const languages = [
  { name: "Yarn", icon: <IconYarn color="#2C8EBB" /> },
  { name: "Npm", icon: <IconNpm color="#CB3837" /> },
  { name: "Pnpm", icon: <IconPnpm color="#F69220" /> },
  { name: "Vite.js", icon: <IconVite color="#646CFF" /> },
  { name: "WebPack", icon: <IconWebpack color="#8DD6F9" /> },
  { name: "Babel", icon: <IconBabel color="#F9DC3E" /> },
  { name: "Git", icon: <IconGit color="#F05032" /> },
];

const DevToolsCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [AutoScroll({ playOnInit: true, stopOnInteraction: true })]
  );

  return (
    <div className="embla py-10 px-2">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container w-[50rem] md:w-auto">
          {languages.map((language, idx) => (
            <div
              className={`embla__slide ${
                idx === 0 && "mx-4"
              } flex flex-col gap-2 items-center py-5 bg-secondary-200 border border-secondary-300 dark:border-secondary-700 dark:bg-secondary-800 rounded-lg`}
              key={idx}
            >
              {language.icon}
              <h6 className="text-lg font-medium">{language.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevToolsCarousel;

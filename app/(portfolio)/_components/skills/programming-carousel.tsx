import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { EmblaOptionsType } from "embla-carousel";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

import {
  IconBrandNextjs,
  IconBrandReactNative,
  IconCplusplus,
  IconJavascript,
  IconLanguageTypescript,
  IconNodeJs,
  IconNuxtjs,
  IconPython,
  IconReact,
  IconVuejs,
} from "@/components/icons";

const languages = [
  { name: "JavaScript", icon: <IconJavascript color="#F0DB4F" /> },
  { name: "TypeScript", icon: <IconLanguageTypescript color="#377CC8" /> },
  { name: "C++", icon: <IconCplusplus color="#6295CB" /> },
  { name: "Node.js", icon: <IconNodeJs color="green" /> },
  { name: "Python", icon: <IconPython color="#377CC8" /> },
  { name: "React", icon: <IconReact color="#66DBFB" /> },
  { name: "Vue.js", icon: <IconVuejs color="#3FB27F" /> },
  { name: "React Native", icon: <IconBrandReactNative color="#08ACDA" /> },
  { name: "Next.js", icon: <IconBrandNextjs color="#FFFFFF" /> },
  { name: "Nuxt.js", icon: <IconNuxtjs color="#84EFC2" /> },
];

const ProgrammingCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [AutoScroll({ playOnInit: true, stopOnInteraction: true })]
  );

  return (
    <div className="embla py-10 px-2">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container w-[50rem] md:w-auto  ">
          {languages.map((language, idx) => (
            <div
              className={`embla__slide ${
                idx === 0 && "mx-4"
              }  flex flex-col gap-2 items-center py-5 bg-secondary-200 border border-secondary-300 dark:border-secondary-700 dark:bg-secondary-800 rounded-lg`}
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

export default ProgrammingCarousel;

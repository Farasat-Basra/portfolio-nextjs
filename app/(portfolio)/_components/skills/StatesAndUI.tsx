import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { EmblaOptionsType } from "embla-carousel";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

import { IconBrandRedux } from "@/components/icons";
import { IconHookState } from "@/components/icons/Hooks";
import { IconReactQuery } from "@/components/icons/ReactQuery";
import { IconRtkQuery } from "@/components/icons/RTKQuery";
import { IconReduxToolkit } from "@/components/icons/ReduxToolkit";
import { IconStyledComponents } from "@/components/icons/StyledCom";
import { IconAntDesign } from "@/components/icons/AntDesign";
import { IconMaterialUi } from "@/components/icons/MUI";
import { IconTailwind } from "@/components/icons/Tailwind";
import { IconBootstrap } from "@/components/icons/Boostrap";
import { IconSass } from "@/components/icons/Sas";
import { IconMaterialize } from "@/components/icons/Materalize";
import { IconPreact } from "@/components/icons/PreReact";

const languages = [
  { name: "Hook State", icon: <IconHookState color="#4A90E2" /> },
  { name: "Styled Components", icon: <IconStyledComponents color="#DB7093" /> },
  { name: "Redux", icon: <IconBrandRedux color="#764ABC" /> },
  { name: "Ant Design", icon: <IconAntDesign color="#1890FF" /> },
  { name: "React Query", icon: <IconReactQuery color="#FF4555" /> },
  { name: "Material UI", icon: <IconMaterialUi color="#007FFF" /> },
  { name: "RTK Query", icon: <IconRtkQuery color="#7D4CCB" /> },
  { name: "Tailwind", icon: <IconTailwind color="#38B2AC" /> },
  { name: "Preact", icon: <IconPreact color="#673AB8" /> },
  { name: "Bootstrap", icon: <IconBootstrap color="#7952B3" /> },
  // { name: "SASS", icon: <IconSass color="#CC6699" /> },
  { name: "Redux Toolkit", icon: <IconReduxToolkit color="#764ABC" /> },
  { name: "Materialize", icon: <IconMaterialize color="#EE6E73" /> },
];



const ProgrammingCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      AutoScroll({
        playOnInit: true,
        stopOnInteraction: true,
        direction: "backward",
      }),
    ]
  );

  return (
    <div className="embla py-10 px-2">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex w-[50rem] md:w-full">
          {languages.map((language, idx) => (
            <div
              className={`embla__slide ${
                idx === 0 && "mx-4"
              }  overlfow-hidden gap flex flex-col gap-2  items-center py-5 bg-secondary-200 border border-secondary-300 dark:border-secondary-700 dark:bg-secondary-800 rounded-lg`}
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

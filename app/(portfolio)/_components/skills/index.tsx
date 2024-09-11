"use client";

import {
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandPython,
} from "@tabler/icons-react";
import SectionHeading from "../common/section-heading";
import ProgrammingCarousel from "./programming-carousel";
import StateAndUi from "./StatesAndUI";
import DevToolsCarousel from "./tools-carousel";

export const SkillsSection = () => {
  const arr = [
    {
      id: 1,
      title: "Programing Languages",
      skills: [
        {
          id: 1,
          name: "Javascript",
          icon: <IconBrandJavascript size={40} className="text-primary-300" />,
        },
        {
          id: 2,
          name: "Python",
          icon: <IconBrandPython size={40} className="text-primary-300" />,
        },
        {
          id: 3,
          name: "HTML",
          icon: <IconBrandHtml5 size={40} className="text-primary-300" />,
        },
      ],
    },

    {
      id: 2,
      title: "Frameworks",
      skills: [
        {
          id: 1,
          name: "React",
          icon: <IconBrandJavascript size={40} className="text-primary-300" />,
        },
        {
          id: 2,
          name: "Next",
          icon: <IconBrandPython size={40} className="text-primary-300" />,
        },
        {
          id: 3,
          name: "Tailwind",
          icon: <IconBrandHtml5 size={40} className="text-primary-300" />,
        },
      ],
    },

    {
      id: 3,
      title: "Tools",
      skills: [
        {
          id: 1,
          name: "Git",
          icon: <IconBrandJavascript size={40} className="text-primary-300" />,
        },
        {
          id: 2,
          name: "Github",
          icon: <IconBrandPython size={40} className="text-primary-300" />,
        },
        {
          id: 3,
          name: "VS Code",
          icon: <IconBrandHtml5 size={40} className="text-primary-300" />,
        },
      ],
    },
    {
      id: 4,
      title: "Databases",
      skills: [
        {
          id: 1,
          name: "MongoDB",
          icon: <IconBrandJavascript size={40} className="text-primary-300" />,
        },
        {
          id: 2,
          name: "MySQL",
          icon: <IconBrandPython size={40} className="text-primary-300" />,
        },
        {
          id: 3,
          name: "PostgreSQL",
          icon: <IconBrandHtml5 size={40} className="text-primary-300" />,
        },
      ],
    },
  ];

  return (
    <section id="skills" className="scroll-m-16 py-20">
      <SectionHeading subTitle="Front End" Title="Skills" />
      {/* <div className="grid grid-cols-2 container py-10 gap-10">
        {arr.map((item, index) => (
          <div key={index}>
            <h1 className="font-bold text-2xl ">
              {" "}
             {`</>`} {item.title}
            </h1>
            <div className="flex gap-5" >
              {item.skills.map((skill, index) => (
                <div className="flex items-center gap-2 py-5">
                  {skill.icon}
                  <h1 className="text-primary-700 text-lg - " >{skill.name}</h1>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div> */}
      <div className="container">
        <div>
          <h3 className="font-bold text-md md:text-2xl">
            {" "}
            <span className="text-primary"> {`</>`} </span>Programming Languages
            / FrameWorks
          </h3>
          <ProgrammingCarousel
            slides={[0, 1, 2, 3, 4, 5]}
            options={{ loop: true }}
          />
        </div>
        <div>
          <h1 className="font-bold text-md md:text-2xl">
            {" "}
            <span className="text-primary"> {`</>`} </span> State Management /
            UI Libraries
          </h1>
          <StateAndUi />
        </div>
        <div>
          <h1 className="font-bold text-md md:text-2xl">
            {" "}
            <span className="text-primary"> {`</>`} </span> Development Tools /
            FrameWorks
          </h1>
          <DevToolsCarousel />
        </div>
      </div>
    </section>
  );
};

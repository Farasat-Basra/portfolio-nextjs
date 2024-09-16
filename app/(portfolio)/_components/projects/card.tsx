import { Button } from "@/components/ui/button";
import { IconShare2 } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

export const ProjectsCard = ({ item }: any) => {
  return (
    <div className="rounded-lg flex flex-col md:flex-row items-stretch gap-5">
      <img
        src={item.projectImage}
        alt="Project 1 Logo"
        className="w-96 h-64 rounded-lg select-none object-contain"
      />
      <div className="px-0 lg:px-5 py-1 flex flex-col gap-2">
        <div className="flex flex-col lg:flex-row justify-between gap-2 items-start lg:items-center">
          <h3 className="text-secondary-700 font-semibold text-2xl  dark:text-secondary-300">
            {item.projectTitle}
          </h3>
          {/* <h3 className="text-secondary-700 pe-0 lg:pe-10 italic  text-xs dark:text-secondary-400">
            23-Aug-22 / 30-Mar-22
          </h3> */}
        </div>
        <div className="flex-grow flex flex-col gap-2">
          <p className="text-secondary-500 dark:text-secondary-400">
            {item.projectDescription}
          </p>
          <h4 className="text-lg font-semibold ">Tools & Technology</h4>
          <div className="inline-flex gap-2 flex-wrap  w-full  lg:w-2/3">
            {item.projectSkills.map((skill: string, idx: number) => (
              <span
                className="bg-secondary-200 px-2  dark:bg-secondary-700 rounded"
                key={idx}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-2">
          <Link href={item.projectGitHubLink} target="_blank">
            <Button variant="outline-primary" size="sm">
              <span>Visit Github </span>
              <IconShare2 size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

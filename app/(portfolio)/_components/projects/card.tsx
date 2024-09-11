import { Button } from "@/components/ui/button";
import { IconShare2 } from "@tabler/icons-react";
import React from "react";

export const ProjectsCard = () => {
  return (
    <div className="rounded-lg flex flex-col md:flex-row items-stretch gap-5">
      <img
        src="/images/projects/logo.png"
        alt="Project 1 Logo"
        className="object-fill w-80 h-64 rounded-lg select-none"
      />
      <div className="px-0 lg:px-5 py-1 flex flex-col gap-2">
        <div className="flex flex-col lg:flex-row justify-between gap-2 items-start lg:items-center">
        <h3 className="text-secondary-700 font-semibold text-2xl  dark:text-secondary-300">
          Test Project 1
        </h3>
        <h3 className="text-secondary-700 pe-0 lg:pe-10 italic  text-xs dark:text-secondary-400">
          23-Aug-22 / 30-Mar-22
        </h3>
        </div>
        <div className="flex-grow flex flex-col gap-2">
          <p className="text-secondary-500 dark:text-secondary-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum modi
            mollitia perferendis labore sint iusto dolore. Odio labore iure
            veritatis, id laboriosam sed dolorem itaque cumque eaque quidem ipsa
            minima.
          </p>
          <h4 className="text-lg font-semibold ">Tools & Technology</h4>
          <div className="inline-flex gap-2 flex-wrap  w-full  lg:w-2/3">
            <span className="bg-secondary-200 px-2  dark:bg-secondary-700 rounded">
              React.js
            </span>
            <span className="bg-secondary-200 px-2  dark:bg-secondary-700 rounded">
              React.js
            </span>
            <span className="bg-secondary-200 px-2  dark:bg-secondary-700 rounded">
              React.js
            </span>
            <span className="bg-secondary-200 px-2  dark:bg-secondary-700 rounded">
              React.js
            </span>
            <span className="bg-secondary-200 px-2  dark:bg-secondary-700 rounded">
              React.js
            </span>
            <span className="bg-secondary-200 px-2  dark:bg-secondary-700 rounded">
              React.js
            </span>
            <span className="bg-secondary-200 px-2  dark:bg-secondary-700 rounded">
              React.js
            </span>
            <span className="bg-secondary-200 px-2  dark:bg-secondary-700 rounded">
              React.js
            </span>
            <span className="bg-secondary-200 px-2  dark:bg-secondary-700 rounded">
              React.js
            </span>
          </div>
        </div>
        <div className="mt-2">
          <Button variant="outline-primary" size="sm">
            <span>Visit</span>
            <IconShare2 size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

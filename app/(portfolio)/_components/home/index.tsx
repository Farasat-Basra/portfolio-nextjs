"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

// images
import heroAvatar from "/public/images/hero-avatar.jpg";

export const HomeSection = () => {
  return (
    <section
      id="home"
      className="container gap-5 py-20 grid grid-cols-1   lg:grid-cols-2 items-center"
    >
      <div className="grid-cols-6 order-2 lg:order-1  ">
        <h6 className="text-primary-700 dark:text-primary-500 ">Hi there ✋</h6>
        <h1 className="group inline-block text-4xl lg:text-6xl font-bold leading-snug">
          <span className="relative after:block after:transition-[width] after:duration-500 after:ease-out after:w-0 after:content-[''] after:h-1 after:rounded-md after:group-hover:w-full after:bg-secondary-700 after:dark:bg-secondary-200 after:absolute after:bottom-0 after:left-0">
            I&apos;m Muhammad
          </span>
          <br />
          <span className="relative after:block after:transition-[width] after:duration-500 after:ease-out after:w-0 after:content-[''] after:h-1 after:rounded-md after:group-hover:w-full after:bg-secondary-700 after:dark:bg-secondary-200 after:absolute after:bottom-0 after:left-0">
            Farasat Ali
          </span>
        </h1>
        <div>
        <h6 className="font-semibold  text-xs lg:text-lg bg-primary selection:bg-primary-100 text-secondary-700 px-3 inline-block mt-2 rounded italic">
          Senior MERN Stack Developer
        </h6>
        </div>
        <p className="text-secondary mt-7 text-pretty text-secondary-600 dark:text-secondary-300">
          Innovative Senior MERN Stack Developer with 3 years of proven
          experience in crafting robust web applications. Led teams to transform
          customer requirements into industry-standard solutions. Renowned for
          exceptional code refactoring and optimization, achieving up to 60%
          reduction in application load time and up to 30% decrease in bundle
          size through strategic tool utilization.
        </p>

        <div className="flex gap-5 items-center mt-7">
          <Button type="button" variant="outline-primary">
            Contact Me
          </Button>
          <Button type="button" variant="primary">
            Hire Me
          </Button>
        </div>
      </div>
      <div className="grid-cols-6 h-full flex justify-start lg:justify-end items-center order-1 lg:order-2 ">
        <figure>
          <Image
            src={heroAvatar}
            width={400}
            height={300}
            alt="Main avatar image"
            className="rounded-lg"
          />
        </figure>
      </div>
    </section>
  );
};

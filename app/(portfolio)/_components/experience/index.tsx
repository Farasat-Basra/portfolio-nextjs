import SectionHeading from "../common/section-heading";

const experiences = [
  {
    position: "Senior MERN Stack Developer",
    duration: "October 2022 - Present",
    current: true,
    company: "Axis Coding Solutions, Lahore, Pakistan.",
    responsibilities: [
      "Responsibility 1",
      "Responsibility 2",
      "Responsibility 3",
    ],
    achievements: ["Achievement 1", "Achievement 2", "Achievement 3"],
  },
  {
    position: "MERN Stack Developer",
    duration: "October 2021 - September 2022",
    company: "Nex Soft Solutions, Lahore, Pakistan.",
    responsibilities: [
      "Responsibility 1",
      "Responsibility 2",
      "Responsibility 3",
    ],
    achievements: ["Achievement 1", "Achievement 2", "Achievement 3"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="scroll-m-16 py-20">
      <SectionHeading Title="Work Experience" subTitle="Test Subtitle" />
      <div className="container">
        <div className="max-w-[70%] mx-auto relative before:absolute before:content-[''] before:h-[calc(100%-20px)] before:top-3 before:w-0.5 before:bg-secondary-300 before:dark:bg-secondary-700 before:-left-8  md:before:-left-16 flex flex-col gap-5">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="relative before:absolute before:content-[url('/experience-icon.svg')] before:inline-flex before:items-center before:justify-center before:-left-12  md:before:-left-[5.15rem] before:top-3 z-[5] before:size-10 before:bg-primary-a200 before:pt-1 before:rounded-full flex flex-col gap-2"
            >
              <div>
                <div className="flex flex-col lg:flex-row gap-1 lg:gap-5 items-start lg:items-center">
                  <h2 className="text-primary-700 text-sm lg:text-2xl  font-semibold dark:text-primary">
                    {experience.position}
                  </h2>
                  {experience.current && (
                    <span className="bg-primary selection:bg-primary-100 text-secondary-700 rounded italic px-3 text-sm leading-relaxed font-medium">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-sm py-2 lg:py-0 text-secondary-500 dark:text-secondary-400">
                  {experience.duration}
                </p>
              </div>
              <p className="ml-3 text-sm md:text-lg font-semibold">
                {experience.company}
              </p>
              <div className="flex flex-col gap-2">
                <h3 className="ml-3 text-sm md:text-lg font-bold">
                  Responsibilities
                </h3>
                <ul className="flex flex-col gap-1 ml-10 list-inside list-disc text-secondary-600 dark:text-secondary-300">
                  {experience.responsibilities.map((responsibility, subIdx) => (
                    <li className="text-sm md:text-md " key={subIdx}>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="ml-3 text-sm md:text-lg font-bold">
                  Achievements
                </h3>
                <ul className="flex flex-col gap-1 ml-10 list-inside list-disc text-secondary-600 dark:text-secondary-300">
                  {experience.achievements.map((achievement, subIdx) => (
                    <li className="text-sm md:text-md" key={subIdx}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

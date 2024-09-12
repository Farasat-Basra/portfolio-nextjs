import SectionHeading from "../common/section-heading";

const experiences = [
  {
    position: "Senior Frontend Developer",
    duration: "September 2023 - Present",
    current: false,
    company: "Axis Coding Solutions, Lahore, Pakistan.",
    responsibilities: [
      "Handled the integration of Mostal, making sure the APIs worked smoothly with the frontend.",
      "Worked closely with the backend team to improve how data synced and updated in real-time.",
      "Developed and maintained key features using React.js, focusing on keeping the app fast and efficient.",
    ],
    achievements: [
      "Led the successful Mostal integration, cutting data load times by 25%.",
      "Improved how the code handled API calls, making the app much more responsive.",
      "Set up better debugging tools, which helped speed up fixing issues during integration.",
    ],
  },
  {
    position: "Associate Frontend Developer",
    duration: "june 2021 - September 2023",
    company: "Nex Soft Solutions, Lahore, Pakistan.",
    responsibilities: [
      "Built responsive web apps using React.js and integrated third-party APIs.",
      "Worked with backend developers to ensure smooth API connections and data flow.",
      "Refined older code to improve site performance, cutting load times by 15%.",
    ],
    achievements: [
      "Helped finish a big client project two weeks early, which boosted client satisfaction.",
      "Used React best practices to reduce bugs and improve user interaction.",
      "Contributed to a redesign that improved user satisfaction by 30%.",
    ],
  },
  {
    position: "Junior Frontend Developer",
    duration: "June 2020 - july 2021",
    company: "Nex Soft Solutions, Lahore, Pakistan.",
    responsibilities: [
      "Worked on small to medium-sized features for web applications using HTML, CSS, and JavaScript.",
      "Collaborated with other developers to understand the project requirements and implement basic frontend tasks.",
      "Assisted in debugging and testing applications to ensure functionality across different browsers.",
    ],
    achievements: [
      "Improved web page load speed by optimizing images and reducing unnecessary scripts.",
      "Successfully took ownership of small projects, delivering them on time with positive feedback.",
      "Learned React.js during this period and started contributing to React-based projects.",
    ],
  },
  {
    position: "Internee Frontend Developer",
    duration: "February 2020 - June 2020",
    company: "Nex Soft Solutions, Lahore, Pakistan.",
    responsibilities: [
      "Assisted senior developers with building small frontend features.",
      "Tested and fixed bugs in web applications to meet quality standards.",
      "Learned and applied basic React.js concepts, like components and state management.",
    ],
    achievements: [
      "Completed my internship project early, which was later used in the live system.",
      "Picked up React best practices quickly and helped streamline team workflows.",
      "Got recognized for fast learning and using tools like Git, Jira, and Agile methods.",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="scroll-m-16 py-20">
      <SectionHeading Title="Work Experience" subTitle="Experience" />
      <div className="container flex justify-center ">
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

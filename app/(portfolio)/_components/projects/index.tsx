import SectionHeading from "../common/section-heading";
import { ProjectsCard } from "./card";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-m-16 py-20">
      <SectionHeading Title="Projects" subTitle="Test Subtitle" />
      <div className="container flex flex-col gap-8">
        {Array.from({ length: 4  }).map((_, idx) => (
          <ProjectsCard key={idx} />
        ))}
      </div>
    </section>
  );
};

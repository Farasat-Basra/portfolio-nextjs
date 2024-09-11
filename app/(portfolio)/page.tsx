import {
  HomeSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  ContactMeSection,
} from "./_components";

const SECTIONS = [
  HomeSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  ContactMeSection,
];

function MainPage() {
  return (
    <main className="dark:[&>*:nth-child(even)]:bg-secondary-950 [&>*:nth-child(even)]:bg-secondary-100 w-full">
      {SECTIONS.map((Section, idx: number) => (
        <Section key={idx} />
      ))}
    </main>
  );
}

export default MainPage;

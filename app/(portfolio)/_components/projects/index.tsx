import SectionHeading from "../common/section-heading";
import { ProjectsCard } from "./card";

export const ProjectsSection = () => {

  const data = [
    {
      projectTitle: "My Home Pathway – US-Based Homebuyer Platform",
      projectDescription:
        "Developed and maintained scalable APIs to provide users with credit score recommendations for mortgage approvals.Integrated third-party services (Mixpanel, Customer.io, Twilio) to enhance user engagement and analytics.Optimized PostgreSQL and MongoDB databases to improve data handling and retrieval speed.Implemented and managed CI/CD pipelines for seamless deployments using AWS services.Ensured secure API development while improving front-end performance with Next.js.",
      projectSkills: [
        "Nest.js",
        "Customer IO",
        "Mixpanel Tracking",
        "Array.com",
        "Twilio SMS Services",
        "PostgreSQL",
        "AWS",
        "CI/CD",
        "Prisma",
        "Sentry",        
        "NextAuth",   
        "Next.js",
        "Axios",
        "React Hooks",
      ],
      projectImage: "/images/projects/mhp.png",
      projectGitHubLink: "https://app.myhomepathway.com/user/sign-in",
    },
    {
      projectTitle: "Slash – Gaming Social Platform",
      projectDescription:
        "Built a full-stack gaming social platform using Next.js with API routes, Supabase as the backend database, and NextAuth for secure social authentication. Developed features including live streaming, game feeds, player matchmaking, communities, and a creator marketplace. Focused on scalable architecture, seamless user experience, and real-time data handling.",
      projectSkills: [
        "NextAuth",
        "Supabase",
        "Next.js",
        "Axios",
        "Chart.js",
        "React Hooks",
      ],
      projectImage: "/images/projects/slash.png",
      projectGitHubLink: "https://slash-gaming.vercel.app/",
    },
    {
      projectTitle: "Logistics management software",
      projectDescription:
        "Implemented features to track tasks, manage drivers, and optimize delivery routes. Integrated with GPS devices to provide real-time location data and improve efficiency. Developed a user-friendly dashboard for easy access to key metrics and analytics.",
      projectSkills: [
        "Next.js",
        "React Data Table",
        "Axios",
        "Chart.js",
        "React Hooks",
      ],
      projectImage: "/images/projects/rxtrack.png",
      projectGitHubLink: "",
    },
    {
      projectTitle: "Blockchain platform",
      projectDescription:
        "Integrated with various open-source APIs to fetch data on blocks, validators, and transactions. Developed custom visualizations to present complex data in a clear and understandable format.",
      projectSkills: [
        "Next.js",
        "Material UI",
        "Axios",
        "Chart.js",
        "Vercel",
        "React Hooks",
      ],
      projectImage: "/images/projects/blockchianhome.png",
      projectGitHubLink: "",
    },
    {
      projectTitle: "FX Trading Education Platform",
      projectDescription:
        " Developed an innovative online platform that provides high-quality educational resources for individuals interested in learning about foreign exchange trading.Developed a visually appealing interface with intuitive navigation and easy access to information.",
      projectSkills: ["React.js", "React Hooks", "Tailwind Css", "AOS"],
      projectImage: "/images/projects/gmfx.png",
      projectGitHubLink: "",
    },
    {
      projectTitle: "Jobs Management System JMS",
      projectDescription:
        "Designed and implemented features such as job posting, applicant tracking, interview scheduling, and offer management. Integrated the system with other HR tools to streamline the recruitment process. Ensured the system was user-friendly, scalable, and secure.",
      projectSkills: [
        "Next.js",
        "Material UI",
        "Axios",
        "Chart.js",
        "Vercel",
        "React Hooks",
      ],
      projectImage: "/images/projects/JMS.png",
      projectGitHubLink: "",
    },
    {
      projectTitle: "Transforming Business Ideas into Digital Solutions",
      projectDescription:
        "Software development company called SyscoBit. This website showcases their services, contact information, and a tagline highlighting their ability to transform ideas into digital reality.",
      projectSkills: ["Next.js", "Tailwind Css", "React Hooks", "RTK"],
      projectImage: "/images/projects/syscobit.png",
      projectGitHubLink: "",
    },
    {
      projectTitle: "Vehicles Tracking & Management Software",
      projectDescription:
        "Designed and implemented features to track vehicles, monitor driver activity, and analyze fleet performance. Integrated with GPS devices to provide real-time location data and optimize routes. Developed a user-friendly dashboard for easy access to key metrics and analytics.",
      projectSkills: [
        "Next.js",
        "ShadCn",
        "SWR",
        "Axios",
        "React Hooks",
        "React hook form",
      ],
      projectImage: "/images/projects/FleetStack.png",
      projectGitHubLink: "",
    },
    {
      projectTitle:
        "Real Estate Marketplace Platform Development for Investors MLS",
      projectDescription:
        "To enhance the user experience of Investors MLS by redesigning the search interface, optimizing property listings, and incorporating advanced filtering options.",
      projectSkills: [
        "Next.js",
        "ShadCn",
        "SWR",
        "Axios",
        "React Hooks",
        "React hook form",
      ],
      projectImage: "/images/projects/invest.png",
      projectGitHubLink: "",
    },
  ];
  return (
    <section id="projects" className="scroll-m-16 py-20">
      <SectionHeading Title="Recent Projects" subTitle=" Project Listing " />
      <div className="px-5 md:container flex flex-col gap-8">
        {data?.map((item, idx) => (
          <ProjectsCard key={idx} item={item} />
        ))}
      </div>
    </section>
  );
};

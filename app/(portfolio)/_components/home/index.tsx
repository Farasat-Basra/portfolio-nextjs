"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

// images
// import heroAvatar from "/public/images/hero-avatar.jpg";
// import heroAvatar from "/public/images/farasat.png";
import { TypeAnimation } from "react-type-animation";

export const HomeSection = () => {
  return (
    <section
      id="home"
      className="px-5 md:container py-20 flex justify-center items-center"
    >
      <div className="">
        {/* <div className=" w-[100%] lg:w-[80%]">
          <TypeAnimation
            sequence={[
              "Hi There ✋ I'm Farasat Ali Front-end Developer 💻",
              1000,
              "Hi There ✋ I'm Farasat Ali React Developer 💻",
              1000,
              "Hi There ✋ I'm Farasat Ali Front-end Engineer 💻",
              1000,
              // "“First, solve the problem. Then, write the code.” - John Johnson 🧠💡",
              // 1000,
            ]}
            speed={50}
            // style={{ fontSize: "4em", fontWeight: "bold" }}
            className="text-3xl lg:text-7xl  font-bold transition-all duration-700 "
            // repeat={Infinity}
          />
        </div> */}

        <h1 className="group inline-block text-4xl  lg:text-7xl font-bold leading-snug">
          <span className="relative after:block after:transition-[width] after:duration-500 after:ease-out after:w-0 after:content-[''] after:h-1 after:rounded-md after:group-hover:w-full after:bg-secondary-700 after:dark:bg-secondary-200 after:absolute after:bottom-0 after:left-0">
            Hi There ✋ I&#39;m Farasat Ali
          </span>
        </h1>
        <h1 className="group mt-1 lg:mt-5 inline-block text-4xl lg:text-6xl font-bold leading-snug">
          <span className="relative after:block after:transition-[width] after:duration-500 after:ease-out after:w-0 after:content-[''] after:h-1 after:rounded-md after:group-hover:w-full after:bg-secondary-700 after:dark:bg-secondary-200 after:absolute after:bottom-0 after:left-0">
            Front-end Developer 💻
          </span>
        </h1>

        <p className="text-secondary w-[100%] lg:w-[70%] mt-7 text-md lg:text-xl text-pretty text-secondary-600 dark:text-secondary-300">
          Dynamic Front-end Developer with 3+ years of experience in building
          responsive, high-performance web applications. Led teams to achieve a
          30% reduction in load times and improved user engagement by 25%.
          Recognized for delivering high-quality, maintainable code and
          mentoring junior developers to enhance team performance.
        </p>

        <div className="flex gap-5 items-center mt-7">
          <Button
            type="button"
            variant="outline-primary"
            className="text-white"
          >
            Contact Me
          </Button>
          <Button type="button" variant="primary" className="text-white ">
            Hire Me
          </Button>
        </div>
      </div>
    </section>
  );
};

// "use client";

// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// // images
// // import heroAvatar from "/public/images/hero-avatar.jpg";
// import heroAvatar from "/public/images/farasat.png";

// export const HomeSection = () => {
//   return (
//     <section
//       id="home"
//       className="container gap-5 py-20 grid grid-cols-1   lg:grid-cols-2 items-center"
//     >
//       <div className="grid-cols-6 order-2 lg:order-1  ">
//         <h6 className="text-primary-700 dark:text-primary-500 ">Hi there ✋</h6>
//         <h1 className="group inline-block text-4xl lg:text-6xl font-bold leading-snug">
//           <span className="relative after:block after:transition-[width] after:duration-500 after:ease-out after:w-0 after:content-[''] after:h-1 after:rounded-md after:group-hover:w-full after:bg-secondary-700 after:dark:bg-secondary-200 after:absolute after:bottom-0 after:left-0">
//             I&apos;m &nbsp;
//           </span>
//           {/* <br /> */}
//           <span className="relative after:block after:transition-[width] after:duration-500 after:ease-out after:w-0 after:content-[''] after:h-1 after:rounded-md after:group-hover:w-full after:bg-secondary-700 after:dark:bg-secondary-200 after:absolute after:bottom-0 after:left-0">
//             Farasat Ali
//           </span>
//         </h1>
//         <div>
//           <h6 className="font-semibold  text-xs lg:text-lg bg-primary selection:bg-primary-100 text-secondary-700 px-3 inline-block mt-2 rounded italic">
//             Senior Frontend Developer
//           </h6>
//         </div>
//         <p className="text-secondary mt-7 text-pretty text-secondary-600 dark:text-secondary-300">
//           Dynamic Front-end Developer with 3 years of experience in building
//           responsive, high-performance web applications. Led teams to achieve a
//           30% reduction in load times and improved user engagement by 25%.
//           Recognized for delivering high-quality, maintainable code and
//           mentoring junior developers to enhance team performance.
//         </p>

//         <div className="flex gap-5 items-center mt-7">
//           <Button type="button" variant="outline-primary">
//             Contact Me
//           </Button>
//           <Button type="button" variant="primary">
//             Hire Me
//           </Button>
//         </div>
//       </div>
//       <div className="grid-cols-6 h-full flex justify-start lg:justify-end items-center order-1 lg:order-2">
//         <div className="border-[2rem] flex justify-center items-center rounded-full shadow-2xl shadow-primary-600 w-[29rem] h-[30rem] border-primary-600">
//           <figure>
//             <Image
//               src={heroAvatar}
//               width={200}
//               height={200}
//               alt="Main avatar image"
//               className=" rounded-full size-[26rem]"
//             />
//           </figure>
//         </div>
//       </div>
//     </section>
//   );
// };

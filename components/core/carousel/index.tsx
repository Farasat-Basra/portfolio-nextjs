// components/Carousel.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  IconCplusplus,
  IconJavascript,
  IconLanguageTypescript,
} from "@/components/icons";

const languages = [
  { name: "JavaScript", icon: <IconJavascript color="#F0DB4F" /> },
  { name: "C++", icon: <IconCplusplus color="#007ACC" /> },
  { name: "Java", icon: <IconCplusplus color="#007ACC" /> },
  { name: "Python", icon: <IconLanguageTypescript color="#007ACC" /> },
  { name: "C++", icon: <IconCplusplus color="#007ACC" /> },
  { name: "TypeScript", icon: <IconCplusplus color="#007ACC" /> },
  { name: "C++", icon: <IconCplusplus color="#007ACC" /> },
  { name: "Ruby", icon: <IconLanguageTypescript color="#007ACC" /> },
  { name: "C++", icon: <IconCplusplus color="#007ACC" /> },
];

const Carousel: React.FC = () => {
  return (
    <div className="py-20">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={4}
        spaceBetween={30}
      >
        {languages.map((language, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col border size-40  shadow-2xl shadow-primary  rounded-lg justify-center items-center  gap-2">
              {language.icon}
              <h1 className="text-secondary-200 text-lg"> {language.name} </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

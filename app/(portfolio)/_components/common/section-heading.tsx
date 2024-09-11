import React from "react";

const SectionHeading = ({
  subTitle,
  Title,
}: {
  subTitle: string;
  Title: string;
}) => {
  return (
    <div className="flex justify-center flex-col gap-3 items-center pb-10 leading-snug">
      <h2 className="text-primary-700 dark:text-primary-500 text-sm">
        {subTitle}
      </h2>
      <h1 className="font-bold text-center text-5xl">{Title}</h1>
    </div>
  );
};

export default SectionHeading;

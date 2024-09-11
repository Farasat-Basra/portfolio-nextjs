import { Button } from "@/components/ui/button";
import SectionHeading from "../common/section-heading";

export const ContactMeSection = () => {
  let gradient = `bg-gradient-to-r from-teal-400 to-gray-800`;
  return (
    <section id="contact" className="scroll-m-16 w-full py-20">
      <SectionHeading Title="Contact Me" subTitle="Test Subtitle" />
      <div className="container">
        <form className="flex flex-col gap-5">
          <div className="col-span-1">
            <label
              htmlFor="contact-name"
              className="ms-1 mb-1 text-sm  font-semibold text-primary-700 dark:text-primary after:content-['*'] after:ms-1"
            >
              Name
            </label>
            <input
              id="contact-name"
              placeholder="Ex. John Doe"
              className="h-11 px-3 flex items-center w-full transition-all rounded-lg outline-none bg-secondary-200 placeholder:text-sm placeholder:text-secondary-500 focus-within:placeholder:translate-x-1.5 placeholder:transition-transform placeholder:duration-500 focus-within:bg-secondary-300/80 focus-within:ring-2 focus-within:ring-inset focus-within:ring-secondary-400 dark:bg-secondary-800 dark:placeholder:text-secondary-400 dark:focus-within:bg-secondary-700/80 dark:focus-within:ring-secondary-500"
            />
          </div>
          <div className="col-span-1">
            <label
              htmlFor="contact-email"
              className="ms-1 mb-1 text-sm  font-semibold text-primary-700 dark:text-primary after:content-['*'] after:ms-1"
            >
              Email
            </label>
            <input
              id="contact-email"
              placeholder="Ex. johndoe@mail.com"
              className="h-11 px-3 flex items-center w-full transition-all rounded-lg outline-none bg-secondary-200 placeholder:text-sm placeholder:text-secondary-500 focus-within:placeholder:translate-x-1.5 placeholder:transition-transform placeholder:duration-500 focus-within:bg-secondary-300/80 focus-within:ring-2 focus-within:ring-inset focus-within:ring-secondary-400 dark:bg-secondary-800 dark:placeholder:text-secondary-400 dark:focus-within:bg-secondary-700/80 dark:focus-within:ring-secondary-500"
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="contact-description"
              className="ms-1 mb-1 text-sm  font-semibold text-primary-700 dark:text-primary after:content-['*'] after:ms-1"
            >
              Description
            </label>
            <textarea
              id="contact-description"
              placeholder="A brief description of your query..."
              rows={6}
              className="px-3 py-2 w-full resize-none transition-all rounded-lg outline-none bg-secondary-200 placeholder:text-sm placeholder:text-secondary-500 focus-within:placeholder:translate-x-1.5 placeholder:transition-transform placeholder:duration-500 focus-within:bg-secondary-300/80 focus-within:ring-2 focus-within:ring-inset focus-within:ring-secondary-400 dark:bg-secondary-800 dark:placeholder:text-secondary-400 dark:focus-within:bg-secondary-700/80 dark:focus-within:ring-secondary-500"
              style={{ scrollbarWidth: "thin" }}
            />
          </div>
          <div className="col-span-2 text-center">
            <Button type="submit" size="md" variant="invert">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

import { IconHeart } from "@tabler/icons-react";

export const Footer = () => {
  return (
    <footer className="h-12 bg-secondary-200 dark:bg-secondary-800 flex items-center justify-center text-xs lg:text-xl font-medium tracking-wider">
      Copyright &copy; {new Date().getFullYear()}, Made with
      <IconHeart className="mx-1.5 text-red-light dark:text-red-dark" />
      by Mubeen.
    </footer>
  );
};

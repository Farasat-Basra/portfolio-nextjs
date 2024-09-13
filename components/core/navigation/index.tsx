"use client";
import dynamic from "next/dynamic";
const ThemeToggler = dynamic(() => import("../theme-toggler"), { ssr: false });

import { NavLinks } from "./nav-links";
import { cn } from "@/utils";
import { useScroll } from "@/utils/hooks";
import { AppIcon } from "../app-icon";
import { IconMenu2 } from "@tabler/icons-react";

function Navbar({ setShow }: any) {
  const [isScrolled] = useScroll();
  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex flex-col h-[4.2rem] justify-start"
        // isScrolled
        //   ? "box-content backdrop-blur-lg border-b border-secondary-300 dark:border-secondary-800 z-10"
        //   : ""
      )}
    >
      <div>
        <div className="px-7 bg-primary-50/50 dark:bg-secondary-800/50  py-4 flex lg:hidden justify-between items-center  ">
          <div className="flex justify-end  items-center">
          <IconMenu2 size={30} onClick={() => setShow(true)} />
            <ThemeToggler />
          </div>
            <AppIcon />
        </div>
      </div>

      <nav
        className={cn(
          "hidden bg-primary-50/50  border border-white dark:bg-secondary-900 my-5 z-[999px] py-3 rounded-full h-full container lg:flex justify-between px-10 gap-10  items-center",
          isScrolled
            ? "shadow-lg animate-shadowLoop transition-all duration-500  "
            : ""
        )}
      >
        {/* <h1> {"</> Farasat Ali "} </h1> */}
        <AppIcon />

        <div className="h-full flex justify-end gap-10 items-stretch">
          <NavLinks />
        </div>
        <div className="w-24 self-center justify-self-end">
          <ThemeToggler />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

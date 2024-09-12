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
        "sticky top-0 z-50 flex flex-col h-[4.2rem] justify-start",
        // isScrolled
        //   ? "box-content backdrop-blur-lg border-b border-secondary-300 dark:border-secondary-800 z-10"
        //   : ""
      )}
    >
      <div>
        <div className="px-7 py-4 flex lg:hidden justify-between items-center  ">
          <IconMenu2 size={30} onClick={() => setShow(true)} />
          <img
            className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src="/images/hero-avatar.jpg"
            alt="Bordered avatar"
          />
        </div>
      </div>

      <nav
        className={cn(
          "hidden bg-primary-50/50 dark:bg-secondary-800/50 my-5 z-[999px] py-3 rounded-full h-full container lg:flex justify-between px-10 gap-10  items-center",
          isScrolled
            ? "shadow-lg animate-shadowLoop transition-all duration-500  "
            : ""
        )}
      >
        <h1> {"</> Farasat Ali "} </h1>

        <div className="h-full flex justify-end gap-10 items-stretch">
          <NavLinks />
          <div className="w-24 self-center justify-self-end">
            <ThemeToggler />
          </div>
        </div>
        <AppIcon />
      </nav>
    </header>
  );
}

export default Navbar;

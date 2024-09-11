"use client";
import { useEffect, useRef, useState } from "react";
import { LinkItem } from "./link-item";
import {
  IconHome,
  IconBulb,
  IconMessage,
  IconLayoutDashboard,
  IconHomeFilled,
  IconBulbFilled,
  IconArticle,
  IconArticleFilled,
  IconLayoutDashboardFilled,
  IconMessageFilled,
} from "@tabler/icons-react";
import { useParams } from "next/navigation";

const navigation = [
  {
    title: "Home",
    href: "#home",
    outlineIcon: IconHome,
    filledIcon: IconHomeFilled,
  },
  {
    title: "Skills",
    href: "#skills",
    outlineIcon: IconBulb,
    filledIcon: IconBulbFilled,
  },
  {
    title: "Experience",
    href: "#experience",
    outlineIcon: IconArticle,
    filledIcon: IconArticleFilled,
  },
  {
    title: "Projects",
    href: "#projects",
    outlineIcon: IconLayoutDashboard,
    filledIcon: IconLayoutDashboardFilled,
  },
  {
    title: "Contact",
    href: "#contact",
    outlineIcon: IconMessage,
    filledIcon: IconMessageFilled,
  },
];

export const NavLinks = () => {
  const [activeLink, setActiveLink] = useState(-1);
  const highlighterRef = useRef<HTMLLIElement>(null);
  const listItemsRef = useRef<Array<HTMLLIElement | null>>([]);

  const params = useParams();

  function handleHighlighterPosition(idx: number) {
    const activeLink = listItemsRef.current?.[idx];
    if (activeLink && highlighterRef.current) {
      highlighterRef.current.style.left = `${activeLink.offsetLeft}px`;
      highlighterRef.current.style.width = `${activeLink.offsetWidth}px`;
    }
    setActiveLink(idx);
  }

  useEffect(() => {
    const hash = window.location.hash;
    const idx = navigation.findIndex((item) => item.href === hash);
    handleHighlighterPosition(idx);

    const handleResize = () => handleHighlighterPosition(activeLink);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeLink, params]);

  const assignRefToListItem = (e: HTMLLIElement | null, idx: number) => {
    return (listItemsRef.current[idx] = e);
  };

  return (
    <ul className="relative flex gap-2 items-stretch">
      {navigation.map((item, idx) => (
        <LinkItem
          assignRef={assignRefToListItem}
          key={idx}
          idx={idx}
          activeLink={activeLink}
          {...item}
        />
      ))}
      <li
        className="transition-all ease-out duration-300 z-10 bottom-0 absolute h-1 rounded bg-primary-500 dark:bg-primary-400"
        ref={highlighterRef}
      />
    </ul>
  );
};

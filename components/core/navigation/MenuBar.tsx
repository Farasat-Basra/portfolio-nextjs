import { IconCancel, IconMenuDeep, IconX } from "@tabler/icons-react";
import React from "react";
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
import Link from "next/link";
import { AppIcon } from "../app-icon";

const MenuBar = ({ show, setShow }: any) => {
  const navigation = [
    {
      title: "Home",
      href: "#home",
      outlineIcon: <IconHome />,
      filledIcon: IconHomeFilled,
    },
    {
      title: "Skills",
      href: "#skills",
      outlineIcon: <IconBulb />,
      filledIcon: IconBulbFilled,
    },
    {
      title: "Experience",
      href: "#experience",
      outlineIcon: <IconArticle />,
      filledIcon: IconArticleFilled,
    },
    {
      title: "Projects",
      href: "#projects",
      outlineIcon: <IconLayoutDashboard />,
      filledIcon: IconLayoutDashboardFilled,
    },
    {
      title: "Contact",
      href: "#contact",
      outlineIcon: <IconMessage />,
      filledIcon: IconMessageFilled,
    },
  ];
  return (
    <>
      {show && (
        <div className="absolute z-[999px] bg-secondary-900 text-white w-full h-screen  ">
          <div className="p-5">
            <div className="flex justify-between items-center ">
              <IconMenuDeep onClick={() => setShow(false)} />
              <AppIcon />
            </div>
            <div className="mt-10">
              <ul className="flex flex-col gap-5">
                {navigation.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item?.href}
                    onClick={() => setShow(false)}
                    className="flex gap-2"
                  >
                    {item?.outlineIcon}
                    {item?.title}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuBar;

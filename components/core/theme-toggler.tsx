"use client";
import { useTheme } from "next-themes";
import { IconDeviceDesktop, IconMoon, IconSun } from "@tabler/icons-react";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "../ui/drop-down";
import { ThemeTypes } from "@/definitions/types";

const selectedTheme = {
  light: <IconSun />,
  dark: <IconMoon />,
  system: <IconDeviceDesktop />,
};

const ThemeToggler = () => {
  const theme = useTheme();
  const value = theme?.theme as ThemeTypes;
  return (
    <Dropdown>
      <DropdownTrigger className="flex gap-2 items-center">
        {value && selectedTheme[value]}
        {value && <span className="capitalize">{value}</span>}
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem
          defaultActive={value === "light"}
          onClick={() => theme?.setTheme("light")}
          start={<IconSun size={20} />}
        >
          Light
        </DropdownItem>
        <DropdownItem
          defaultActive={value === "dark"}
          onClick={() => theme?.setTheme("dark")}
          start={<IconMoon size={20} />}
        >
          Dark
        </DropdownItem>
        {/* <DropdownItem
          defaultActive={value === "system"}
          onClick={() => theme?.setTheme("system")}
          start={<IconDeviceDesktop size={20} />}
        >
          System
        </DropdownItem> */}
      </DropdownContent>
    </Dropdown>
  );
};

export default ThemeToggler;

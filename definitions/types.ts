import { ReactNode } from "react";

export type ChildrenProps = Readonly<{
  children: ReactNode;
}>;

export type ThemeTypes = "light" | "dark" | "system";

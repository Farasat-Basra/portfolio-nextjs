import {
  ForwardRefExoticComponent,
  RefAttributes,
  useMemo,
  useState,
} from "react";
import Link from "next/link";

import { Icon, IconProps } from "@tabler/icons-react";

import { cn } from "@/utils";

type IconType = ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;

type PropTypes = {
  title: string;
  href: string;
  outlineIcon: IconType;
  filledIcon: IconType;
  idx: number;
  activeLink: number;
  assignRef: (e: HTMLLIElement | null, idx: number) => any;
};

export const LinkItem = (props: PropTypes) => {
  const { title, href, idx, activeLink, assignRef } = props;

  const [isLinkHover, setIsLinkHover] = useState(false);

  const toggleLinkHover = (value: boolean) => setIsLinkHover(value);

  const isActive = useMemo(() => activeLink === idx, [activeLink, idx]);
  const Icon = useMemo(
    () => (isActive || isLinkHover ? props.filledIcon : props.outlineIcon),
    [isActive, isLinkHover, props.filledIcon, props.outlineIcon]
  );
  return (
    <li
      ref={(e) => assignRef(e, idx)}
      className={cn(
        "hover:text-primary dark:hover:text-primary-400 flex justify-center items-center cursor-pointer transition h-full",
        isActive &&
          "text-primary-700 dark:text-primary-500 bg-primary/10 dark:bg-primary-400/10 delay-200"
      )}
      onMouseEnter={() => toggleLinkHover(true)}
      onMouseLeave={() => toggleLinkHover(false)}
    >
      <Link
        href={href}
        className="flex gap-2 items-center px-5 h-full self-center"
      >
        <Icon size={20} />
        {title}
      </Link>
    </li>
  );
};

LinkItem.displayName = "Nav link item";

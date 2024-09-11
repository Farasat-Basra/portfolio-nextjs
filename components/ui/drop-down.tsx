"use client";
import { HTMLAttributes, MouseEvent, ReactNode, useRef } from "react";
import { ChildrenProps } from "@/definitions/types";
import { twMerge } from "tailwind-merge";
import { useOnClickOutside } from "@/utils/hooks";

const toggleDataState = (
  target: (EventTarget & Element) | Element | HTMLElement
) => {
  if (target?.getAttribute("data-state") === "open")
    target?.setAttribute("data-state", "close");
  else target?.setAttribute("data-state", "open");
};

function getNextSiblings(elem: any, elements: any[]) {
  while ((elem = elem.nextSibling)) {
    elements.push(elem);
  }
}

function getPreviousSiblings(elem: any, elements: any[]) {
  while ((elem = elem.previousSibling)) {
    elements.push(elem);
  }
}

const getAllSiblingsExceptCurrent = (target: EventTarget & HTMLLIElement) => {
  const elements: any[] = [];
  getNextSiblings(target, elements);
  getPreviousSiblings(target, elements);
  return elements;
};

const Dropdown = ({ children }: ChildrenProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(dropdownRef, toggleDropdown);

  function toggleDropdown() {
    const children = dropdownRef.current?.children;
    const trigger = children?.[0];
    const content = children?.[1];
    trigger?.setAttribute("data-state", "close");
    content?.setAttribute("data-state", "close");
  }

  return (
    <div ref={dropdownRef} className="relative text-base leading-[0]">
      {children}
    </div>
  );
};

const DropdownTrigger = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLButtonElement>) => {
  const openDropdown = (event: MouseEvent) => {
    const target = event.currentTarget;
    toggleDataState(target);
    const content = target.nextElementSibling as EventTarget & Element;
    toggleDataState(content);
  };

  return (
    <button
      data-state="close"
      title="Change your theme."
      onClick={openDropdown}
      className={twMerge(
        "data-[state=open]:dark:bg-secondary-500 hover:bg-secondary-200 dark:hover:bg-secondary-700 data-[state=open]:bg-secondary-400/50 data-[state=open]:transition-[background] transition-[color] rounded px-3 py-2",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const DropdownContent = ({ children }: ChildrenProps) => {
  return (
    <ul
      data-state="close"
      className="data-[state=open]:animate-menu-open data-[state=close]:animate-menu-close top-12 left-0 text-base absolute bg-secondary-200 dark:bg-secondary-700 min-w-48 p-0.5 rounded data-[state=close]:hidden data-[state=open]:flex data-[state=open]:flex-col data-[state=open]:gap-0.5 border border-secondary-400/70 dark:border-secondary-500/70 drop-shadow-md shadow-secondary-200 dark:shadow-secondary-700"
    >
      {children}
    </ul>
  );
};

interface IDropdownItem extends HTMLAttributes<HTMLLIElement> {
  start?: ReactNode;
  defaultActive?: boolean;
}

const commonItemClasses =
  "cursor-pointer transition-[background] px-3 py-2 rounded hover:bg-secondary-300 hover:dark:bg-secondary-600 data-[active=true]:bg-secondary-400/50 data-[active=true]:dark:bg-secondary-500";
const DropdownItem = (props: IDropdownItem) => {
  const {
    children,
    className,
    onClick,
    defaultActive = false,
    start,
    role = "list-box",
    ...otherProps
  } = props;

  const finalProps = start
    ? {
        className: twMerge(
          "flex gap-2 items-center",
          commonItemClasses,
          className
        ),
        ...otherProps,
      }
    : { className: twMerge(commonItemClasses, className), ...otherProps };

  const removeActiveState = (target: EventTarget & HTMLLIElement) => {
    const siblings = getAllSiblingsExceptCurrent(target);
    siblings.forEach((sib) => sib.setAttribute("data-active", "false"));
  };

  const handleSelection = (
    target: EventTarget & HTMLLIElement,
    content: HTMLElement,
    trigger: Element
  ) => {
    toggleDataState(trigger);
    toggleDataState(content);
    if (target.getAttribute("data-active") === "false")
      target.setAttribute("data-active", "true");
    removeActiveState(target);
  };

  const handleClick = (event: MouseEvent<HTMLLIElement>) => {
    const target = event.currentTarget;
    const content = event.currentTarget.parentElement as HTMLElement;
    const trigger = content.previousElementSibling as Element;
    handleSelection(target, content, trigger);
    if (onClick) onClick(event);
  };

  return (
    <li
      role={role}
      data-active={defaultActive ? "true" : "false"}
      onClick={handleClick}
      tabIndex={1}
      {...finalProps}
    >
      {<span>{start}</span>}
      {children}
    </li>
  );
};

export { Dropdown, DropdownTrigger, DropdownContent, DropdownItem };

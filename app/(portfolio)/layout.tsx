"use client";

import { Navbar, Footer } from "@/components/core";
import MenuBar from "@/components/core/navigation/MenuBar";
import { ChildrenProps } from "@/definitions/types";
import { useState } from "react";

function PortfolioLayout(props: ChildrenProps) {
  const { children } = props;
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(true);
  return (
    <div className="relative selection:bg-primary selection:text-secondary-700 dark:bg-secondary-900 transition text-secondary-700 flex flex-col h-full dark:text-secondary-200 tracking-wide">
      {!show && <Navbar setShow={setShow} showModal={showModal} setShowModal={setShowModal} />}

      {!show && (
        <main className="h-full flex-grow flex flex-col gap-5 items-start">
          {children}
        </main>
      )}
      <Footer />
      <MenuBar show={show} setShow={setShow} />
    </div>
  );
}

export default PortfolioLayout;

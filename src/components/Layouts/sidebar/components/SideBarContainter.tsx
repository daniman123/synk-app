"use client";

import React, { ReactNode } from "react";
import { setClass } from "../helpers";
import { useLayoutStore } from "@/store/layoutStore";

const SideBarContainter = ({ children }: { children: ReactNode }) => {
  const isSideBarToggled = useLayoutStore((state) => state.sideBarToggled);

  return (
    <section
      id="sidebar"
      className={`fixed z-20 bg-black overflow-y-auto overflow-x-hidden ${setClass(isSideBarToggled)}`}
    >
      {children}
    </section>
  );
};

export default SideBarContainter;

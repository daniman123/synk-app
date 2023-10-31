import React from "react";

const ToggleSideBar = ({ toggleSideBar }: { toggleSideBar: () => void }) => {
  return (
    <p
      id="burger"
      className="opacity-95 hover:opacity-100 cursor-pointer text-center text-2xl px-2"
      onClick={toggleSideBar}
    >
      ☰
    </p>
  );
};

export default ToggleSideBar;

"use client";

import { useLayoutStore } from "../../../store/layoutStore";
import UserCard from "./components/UserCard";
// import { ExpandedSideBar } from "./components/expanded/expandedSideBar";
// import { ChannelLists } from "./types";

const mock3 = Array(3).fill(3);
const mock7 = Array(7).fill(7);

export const Button = ({ name }: { name: string }) => {
  return (
    <button className="hover:bg-slate-400 rounded text-center">{name}</button>
  );
};




export const UserCardList = ({ mock }: { mock: any[] }) => {
  return (
    <>
      <ul className="grid max-sm:hidden">
        <h4 className="h-[3dvh] my-[1dvh]">Titee</h4>
        {mock.map((_, ind) => (
          <UserCard key={ind} />
        ))}
        <button className="underline">show more</button>
      </ul>
    </>
  );
};    

const SideBar = (): JSX.Element => {
  const isSideBarToggled = useLayoutStore((state) => state.sideBarToggled);

  const sidebarMobileDimsHidden =
    "md:h-full md:w-[30dvh] max-sm:opacity-0  max-sm:translate-x-[-100%] transition-transform transition-opacity duration-300 transform";
  const sidebarMobileDims =
    "md:opacity-0  md:translate-x-[-100%]  max-sm:h-full max-sm:w-full max-sm:opacity-100  max-sm:translate-x-0 transition-transform transition-opacity duration-300 transform ";

  return (
    <section
      id="sidebar"
      className={`fixed z-10 bg-black ${
        isSideBarToggled ? sidebarMobileDimsHidden : sidebarMobileDims
      }`}
    >
      <div
        className="md:h-full
				max-sm:grid max-sm:mt-[15dvh] max-sm:h-[50dvh] max-sm:grid-cols-2 max-sm:py-5 max-sm:px-2"
      >
        <div
          id="menu"
          className="max-sm:place-content-center px-2 md:grid md:grid-row-3
					max-sm:border-r 
								
					"
        >
          <div id="actionButtons" className="grid max-sm:h-full md:h-[20dvh]">
            <Button name="Home" />
            <Button name="Peeks" />
            <Button name="Pulse" />
          </div>
          <UserCardList mock={mock7} />
          <UserCardList mock={mock3} />
        </div>
        <div
          id="session"
          className="max-sm:grid max-sm:px-2
						md:hidden"
        >
          <Button name="Sign Up" />
          <Button name="Log In" />
        </div>
      </div>
    </section>
  );
};

export default SideBar;

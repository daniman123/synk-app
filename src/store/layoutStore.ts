import { create } from "zustand";

export interface LayoutStore {
	sideBarToggled: boolean;
	isToggled: {
		[key: string]: { content: string; sideBar: string };
	};
	size: string;

	setSize: () => void;
	collapseSideBar: () => void;
	expandSideBar: () => void;
	toggleSideBar: () => void;
}

export const useLayoutStore = create<LayoutStore>((set) => ({
	sideBarToggled: true,
	isToggled: {
		expanded: { content: "md:ml-[12dvw]", sideBar: "w-[12dvw]" },
		collapsed: { content: "max-sm:ml-1 ml-[5dvw]", sideBar: "max-sm:hidden w-[5dvw]" },
	},
	size: "expanded",
	setSize: () =>
		set((state) => ({ size: state.sideBarToggled ? "expanded" : "collapsed" })),
	collapseSideBar: () => set({ sideBarToggled: false }),
	expandSideBar: () => set({ sideBarToggled: true }),
	toggleSideBar: () =>
		set((state) => ({ sideBarToggled: !state.sideBarToggled })),
}));

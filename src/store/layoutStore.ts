import { create } from "zustand";

export interface LayoutStore {
	sideBarToggled: boolean;
	collapseSideBar: () => void;
	expandSideBar: () => void;
	toggleSideBar: () => void;
}

export const useLayoutStore = create<LayoutStore>((set) => ({
	sideBarToggled: true,
	collapseSideBar: () => set({ sideBarToggled: false }),
	expandSideBar: () => set({ sideBarToggled: true }),
	toggleSideBar: () =>
		set((state) => ({ sideBarToggled: !state.sideBarToggled })),
}));

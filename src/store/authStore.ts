import { create } from "zustand";

export interface AuthStore {
	isSessionAuth: boolean;
	userId: number | null;
	username: string | undefined;
	setSession: (sessionStatus: boolean) => void;
	toggleSession: () => void;
	setUserId: (newUserId: number) => void;
	setUsername: (newUsername: string | undefined) => void;
	clearAuthStore: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
	isSessionAuth: false,
	userId: null,
	username: "",
	setSession: (sessionStatus: boolean) => set({ isSessionAuth: sessionStatus }),
	toggleSession: () =>
		set((state) => ({ isSessionAuth: state.isSessionAuth! })),
	setUserId: (newUserId) => set({ userId: newUserId }),
	setUsername: (newUsername) => set({ username: newUsername }),
	clearAuthStore: () =>
		set({ isSessionAuth: false, userId: null, username: "" }),
}));

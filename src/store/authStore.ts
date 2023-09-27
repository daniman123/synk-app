import { create } from "zustand";

export interface AuthStore {
	userToken: string | undefined;
	userId: number | null;
	username: string | undefined;
	setSessionToken: (newToken: string) => void;
	setUserId: (newUserId: number) => void;
	setUsername: (newUsername: string | undefined) => void;
	clearAuthStore: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
	userToken: "",
	userId: null,
	username: "",
	setSessionToken: (newToken) => set({ userToken: newToken }),
	setUserId: (newUserId) => set({ userId: newUserId }),
	setUsername: (newUsername) => set({ username: newUsername }),
	clearAuthStore: () => set({ userToken: "", userId: null, username: "" }),
}));

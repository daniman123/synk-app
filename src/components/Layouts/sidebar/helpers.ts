export const setClass = (isSideBarToggled: boolean): string => {
	const sidebarMobileDimsHidden =
		"fixed h-[calc(100dvh-3rem)] md:w-[13%] overflow-y-auto overflow-x-hidden max-sm:opacity-0  max-sm:translate-x-[-100%] transition-transform transition-opacity duration-300 transform";
	const sidebarMobileDims =
		"md:opacity-0  md:translate-x-[-100%]  max-sm:h-full max-sm:w-full max-sm:opacity-100  max-sm:translate-x-0 transition-transform transition-opacity duration-300 transform ";

	if (isSideBarToggled) {
		return sidebarMobileDimsHidden;
	}
	return sidebarMobileDims;
};

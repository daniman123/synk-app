export const setClass = (isSideBarToggled: boolean): string => {
	const sidebarMobileDimsHidden =
		"md:h-[92%] md:max-w-[20%] md:w-[20%] lg:max-w-[13%] lg:w-[13%] max-sm:opacity-0  max-sm:translate-x-[-100%] transition-transform transition-opacity duration-300 transform";
	const sidebarMobileDims =
		"md:opacity-0  md:translate-x-[-100%]  max-sm:h-full max-sm:w-full max-sm:opacity-100  max-sm:translate-x-0 transition-transform transition-opacity duration-300 transform ";

	if (isSideBarToggled) {
		return sidebarMobileDimsHidden;
	}
	return sidebarMobileDims;
};

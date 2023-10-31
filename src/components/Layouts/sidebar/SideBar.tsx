import SmallBPSessionAuth from "@/components/features/auth/components/smallBPSessionAuth";
import { IUserCard } from "./types";
import Menu from "./components/Menu";

const SideBar = ({
	following,
	recommended,
}: {
	following: IUserCard[];
	recommended: IUserCard[];
}): JSX.Element => {
	return (
		<div
			className="md:h-full relative w-full
		max-sm:grid max-sm:mt-[15dvh] max-sm:h-[50dvh] max-sm:grid-cols-2 max-sm:py-5 max-sm:px-2"
		>
			<Menu following={following} recommended={recommended} />
			<SmallBPSessionAuth />
		</div>
		
	);
};

export default SideBar;

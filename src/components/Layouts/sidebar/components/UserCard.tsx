import React from "react";
import { IUserCard } from "../types";
import ProfilePicture from "@/components/ui/profilePicture/ProfilePicture";
import LiveViewCount from "@/components/ui/liveViewCount/LiveViewCount";

export const UserCard = ({
	id,
	category,
	isLive,
	profilePicture,
	userName,
	viewers,
}: IUserCard) => {
	console.log("🚀 ~ file: UserCard.tsx:12 ~ id:", id);
	return (
		<li className="grid grid-cols-12 relative max-w-full w-[12dvw] h-10 items-center hover:bg-slate-400 rounded cursor-pointer">
			<div className="flex items-center min-h-full h-full col-span-2">
				<ProfilePicture src={profilePicture} alt="" height="h-[50%]" />
			</div>
			<div className="block min-h-full h-full col-span-6">
				<p className="w-full max-w-full truncate text-sm">{userName}</p>
				<p className="w-full max-w-full truncate text-xs opacity-75">
					{category}
				</p>
			</div>
			<div className="flex items-center min-h-full h-full col-span-4">
				<LiveViewCount
					viewCount={viewers}
					height="h-full"
					width="w-full"
					fontSize="text-sm"
					onAirSymbolheight="h-2"
					onAirSymbolwidth="w-2"
				/>
			</div>
		</li>
	);
};

export default UserCard;

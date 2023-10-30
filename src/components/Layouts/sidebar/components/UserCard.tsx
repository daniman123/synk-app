import React from "react";
import { IUserCard } from "../types";
import Image from "next/image";

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
		<li className="flex w-full justify-between hover:bg-slate-400 rounded text-center cursor-pointer">
			<Image src={profilePicture} alt="" width={5} height={5} />
			<div className="block max-w-full w-24">
				<p className="w-full max-w-full truncate text-sm">{userName}</p>
				<p className="w-full max-w-full truncate text-xs">{category}</p>
			</div>
			<div>
				<p>{isLive}</p>
				<p className="truncate text-xs">{viewers}</p>
			</div>
		</li>
	);
};

export default UserCard;

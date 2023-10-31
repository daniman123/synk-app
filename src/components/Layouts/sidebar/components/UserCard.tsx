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
    <li className="flex relative w-full justify-between h-10 items-center hover:bg-slate-400 rounded cursor-pointer">
      <div className="h-full flex">
        <div className="flex h-full items-center mr-1">
          <ProfilePicture src={profilePicture} alt="" height="h-[75%]" />
        </div>
        <div className="block max-w-full w-16 mr-1">
          <p className="w-full max-w-full truncate text-sm">{userName}</p>
          <p className="w-full max-w-full truncate text-xs opacity-75">
            {category}
          </p>
        </div>
      </div>
      <LiveViewCount
        viewCount={viewers}
        height="h-full"
        width="w-14"
        fontSize="text-sm"
        onAirSymbolheight="h-2"
        onAirSymbolwidth="h-2"
      />
    </li>
  );
};

export default UserCard;

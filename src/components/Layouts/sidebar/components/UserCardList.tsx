import { ChannelsList } from "../types";
import UserCard from "./UserCard";

export const UserCardList = ({
  userCardData,
  defaultDisplayNum,
  channelListTitle,
}: ChannelsList) => {
  return (
    <ul className="grid relative max-sm:hidden max-w-full w-full border-b mb-2">
      <h4 className="h-7">{channelListTitle}</h4>
      {userCardData.slice(0, defaultDisplayNum).map((data, ind) => (
          <UserCard key={ind} {...data} />
        ))}
      <button className="underline text-sm pb-4 mt-2">show more</button>
    </ul>
  );
};

export default UserCardList;

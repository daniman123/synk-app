import { ChannelsList } from "../types";
import UserCard from "./UserCard";

export const UserCardList = ({
  userCardData,
  defaultDisplayNum,
  channelListTitle,
}: ChannelsList) => {
  return (
    <ul className="grid relative max-sm:hidden w-full">
      <h4 className="h-7">{channelListTitle}</h4>
      {userCardData.slice(0, defaultDisplayNum).map((data, ind) => (
          <UserCard key={ind} {...data} />
        ))}
      {/* <UserCard {...userCardData[0]} /> */}
      <button className="underline text-sm pb-4">show more</button>
    </ul>
  );
};

export default UserCardList;

import React from "react";
import ActionButtons from "./ActionButtons";
import UserCardList from "./UserCardList";
import { IUserCard } from "../types";

const Menu = ({
  following,
  recommended,
}: {
  following: IUserCard[];
  recommended: IUserCard[];
}) => {
  return (
    <div
      id="menu"
      className="relative w-full max-sm:place-content-center px-2 md:grid md:grid-row-3 max-sm:border-r"
    >
      <ActionButtons />
      <UserCardList
        userCardData={following}
        channelListTitle="Following"
        defaultDisplayNum={6}
      />
      <UserCardList
        userCardData={recommended}
        channelListTitle="Recommended"
        defaultDisplayNum={3}
      />
    </div>
  );
};

export default Menu;

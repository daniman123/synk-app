import React from "react";
import { ChatMessageData } from "../../../../../lib/chat/types";

const ChatMessage = ({
	chatMessage,
	id,
	timeStamp,
	userName,
}: ChatMessageData) => {
	console.log(id, timeStamp);
	return (
		<div className="flex pt-1">
			{/* <div>{timeStamp}</div> */}
			<div className="max-w-full pl-2 pr-1 font-semibold text-sm text-fuchsia-700">{userName}:</div>
			<div className="text-sm">{chatMessage}</div>
		</div>
	);
};

export default ChatMessage;

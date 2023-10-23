import React from "react";
import ChatInputField from "./components/ChatInputField";
import mockChatMessagesData from "../../../../lib/chat/CHAT_MESSAGES_MOCK_DATA.json";
import ChatBody from "./components/ChatBody";

const ViewerChat = () => {
	return (
		<div className="max-h-screen w-[360px] bg-blue-950 border-2 border-opacity-5 border-gray-400">
			<div className="flex flex-col ">
				<ChatBody messages={mockChatMessagesData} />
				<ChatInputField />
			</div>
		</div>
	);
};

export default ViewerChat;

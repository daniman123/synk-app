import mockChatMessagesData from "../../../../lib/chat/CHAT_MESSAGES_MOCK_DATA.json";
import ChatBody from "./components/ChatBody";
import ChatInputField from "./components/ChatInputField";

const ViewerChat = () => {
	return (
		<div
			className="max-h-screen rounded bg-blue-950 border-2 border-opacity-5 border-gray-400
						max-sm:h-[45dvh] max-lg:h-48 max-md:w-full		
		"
		>
			<ChatBody messages={mockChatMessagesData} />
			<ChatInputField />
		</div>
	);
};

export default ViewerChat;

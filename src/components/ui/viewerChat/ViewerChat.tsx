import React from "react";
import ChatInputField from "./components/ChatInputField";
import ChatMessage from "./components/ChatMessage";

import mockChatters from "../../../../mockDataJson/RECOMMENDED_CHANNELS_LIST_MOCK_DATA.json";

const ViewerChat = () => {
	return (
		<div className="max-h-screen w-[360px] bg-blue-950 border-2 border-opacity-5 border-gray-400">
			<div className="flex flex-col ">
				<div
					className="bg-black flex flex-col-reverse overflow-y-scroll overscroll-y-contain"
					style={{ height: "calc(880px - 6rem)" }}
				>
					{mockChatters
						.slice()
						.reverse()
						.map((content, index) => (
							<ChatMessage key={index} num={content.userName} />
						))}
				</div>
				<ChatInputField />
			</div>
		</div>
	);
};

export default ViewerChat;

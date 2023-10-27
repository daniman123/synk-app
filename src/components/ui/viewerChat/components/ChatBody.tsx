import { IChatBody } from "../types";
import ChatMessage from "./ChatMessage";

const ChatBody = ({ messages }: IChatBody) => {
	return (
		<div
			className="flex flex-col-reverse overflow-y-scroll overscroll-y-contain py-1
						max-sm:h-[35dvh]"
		>
			{messages
				.slice()
				.reverse()
				.map((content, index) => (
					<ChatMessage key={index} {...content} />
				))}
		</div>
	);
};

export default ChatBody;

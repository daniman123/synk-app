import { IChatBody } from "../types";
import ChatMessage from "./ChatMessage";

const ChatBody = ({ messages }: IChatBody) => {
	return (
		<div
			className="bg-black max-sm:h-full md:h-[calc(100dvh-51px-5rem)] flex flex-col-reverse overflow-y-scroll overscroll-y-contain py-1"
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

import { IChatBody } from "../types";
import ChatMessage from "./ChatMessage";

const ChatBody = ({ messages }: IChatBody) => {
	return (
		<div
			className="bg-black flex flex-col-reverse overflow-y-scroll overscroll-y-contain py-1"
			style={{ height: "calc(880px - 6rem)" }}
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

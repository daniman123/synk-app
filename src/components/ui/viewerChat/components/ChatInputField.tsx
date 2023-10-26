import React, { useRef, useEffect } from "react";

const ChatInputField = () => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleInputChange = () => {
		const textarea = textareaRef.current as HTMLTextAreaElement;
		textarea.style.height = "44px";
		textarea.style.height = `${Math.min(textarea.scrollHeight, 150)}px`;
	};

	useEffect(() => {
		handleInputChange();
	}, []);

	return (
		<div className="h-20 flex pt-2 relative">
			<form action="POST" className="flex h-10 w-full">
				<textarea
					ref={textareaRef}
					placeholder="Type in chat ..."
					onChange={handleInputChange}
					className=" w-[80%] ml-1 rounded overflow-auto outline-none border bg-slate-900 resize-none p-1 absolute bottom-6 placeholder:text-xs placeholder:font-bold"
				></textarea>
				<button
					type="submit"
					className="h-[43px] border w-14 rounded absolute bottom-6 right-2 max-sm:right-0"
				>
					Chat
				</button>
			</form>
		</div>
	);
};

export default ChatInputField;

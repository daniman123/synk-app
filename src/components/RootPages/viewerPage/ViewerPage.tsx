import ChatBody from "@/components/ui/viewerChat/components/ChatBody";
import MediaPlayer from "../../ui/mediaPlayer/MediaPlayer";
import MediaPlayerBanner from "../../ui/mediaPlayer/components/MediaPlayerBanner";
// import ViewerChat from "../../ui/viewerChat/ViewerChat";

import mockChatMessagesData from "../../../../lib/chat/CHAT_MESSAGES_MOCK_DATA.json";
import ChatInputField from "@/components/ui/viewerChat/components/ChatInputField";

const ViewerPage = () => {
	return (
		<div className="md:flex h-full w-full">
			<div className="block max-sm:w-full w-[calc(100%-16dvw)] max-lg:w-[calc(100%-30dvw)]">
				<MediaPlayer />
				<MediaPlayerBanner />
			</div>
			<div className="max-sm:h-[35dvh] h-full max-sm:w-full w-[16dvw] max-lg:w-[30dvw] bg-slate-700">
				<ChatBody messages={mockChatMessagesData} />
				<ChatInputField />
			</div>
		</div>
	);
};

export default ViewerPage;

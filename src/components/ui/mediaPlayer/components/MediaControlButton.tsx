import Image from "next/image";
import Button from "../../button/Button";
import { IMediaControlButton } from "../types";

export const MediaControlButton = ({
	icon,
	altText,
	onClick,
}: IMediaControlButton) => (
	<Button buttonClickFn={onClick}>
		<Image src={icon} alt={altText} />
	</Button>
);

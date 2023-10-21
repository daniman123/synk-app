import { ReactNode } from "react";

export interface IButton {
	buttonClickFn: () => Promise<void> | void;
	children?: ReactNode;
}

const Button = ({ buttonClickFn, children }: IButton) => (
	<button
		id="media-player-button"
		className="opacity-80 hover:opacity-100 z-10"
		onClick={buttonClickFn}
	>
		{children}
	</button>
);

export default Button;

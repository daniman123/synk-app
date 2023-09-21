import Link from "next/link";
import React from "react";

export const ExpandedActionButtons = (): JSX.Element => {
	return (
		<div className="side-bar-expanded-action-buttons-container">
			<div className="expanded-action-buttons-list-container">
				<div className="expanded-action-button">
					<Link href={"/home"}>
						<span>Home</span>
					</Link>
				</div>
				<div className="expanded-action-button">
					<Link href={"/discover"}>
						<span>Discover</span>
					</Link>
				</div>
				<div className="expanded-action-button">
					<Link href={"/peeks"}>
						<span>Peek</span>
					</Link>
				</div>
				<div className="expanded-action-button">
					<Link href={"/pulse"}>
						<span>Pulse</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

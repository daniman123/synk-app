"use client";

import React, { useEffect, useState } from "react";
import { ChannelListElement, ChannelsList } from "../../types";
import Image from "next/image";

export const ListElement = ({
	category,
	id,
	isLive,
	profilePicture,
	userName,
	viewers,
}: ChannelListElement): JSX.Element => {
	return (
		<div className="expanded-side-bar-channel-data-banner-container">
			<div className="expanded-channel-data-container profilePicture">
				<Image
					className="expanded-meta-data profilePicture"
					width={30}
					height={30}
					src={profilePicture}
					alt=""
				/>
			</div>
			<div className="expanded-channel-data-container text-meta-data">
				<div className="side-bar-text-meta-data">
					<div className="expanded-meta-data userName">{userName}</div>
					<div className="expanded-meta-data category">{category}</div>
				</div>
			</div>
			<div className="expanded-channel-data-container broadcast-meta-data">
				<div className="expanded-broadcast-meta-data">
					<div className="expanded-meta-data isLive">{isLive}</div>
					<div className="expanded-meta-data viewers">
						{viewers >= 1000 ? (viewers / 1000).toFixed(1) + "k" : viewers}
					</div>
				</div>
			</div>
		</div>
	);
};

export const PopulatedChannelsList = ({
	channels,
	channelListTitle,
	defaultDisplay,
}: ChannelsList): JSX.Element => {
	const [listLength, setListLength] = useState(defaultDisplay);
	const [channelsDisplay, setChannelsDisplay] = useState(channels);

	useEffect(() => {
		const channelsDisplayNewLength: ChannelListElement[] = channels?.slice(
			0,
			listLength
		);
		setChannelsDisplay(channelsDisplayNewLength);
	}, [listLength, channels]);

	return (
		<>
			<div className="expanded-channel-list-title-container">
				<h5 className="expanded-channel-list-title">{channelListTitle}</h5>
			</div>
			{channelsDisplay?.map((channel: ChannelListElement) => {
				return (
					<div
						className="expanded-side-bar-populated-followed"
						key={channel.id}
					>
						<ListElement {...channel} />
					</div>
				);
			})}
			<div className="show-n-channel-togglers">
				{listLength > defaultDisplay ? (
					<div
						className="show-less-channel-list"
						onClick={() =>
							setListLength((prevLen) => (prevLen -= defaultDisplay))
						}
					>
						show less
					</div>
				) : null}
				<div
					className="show-more-channel-list"
					onClick={() =>
						setListLength((prevLen) => (prevLen += defaultDisplay))
					}
				>
					show more
				</div>
			</div>
		</>
	);
};

export const EmptyChannelsList = (): JSX.Element => {
	return <div>emptyChannelsList</div>;
};

import Image from "next/image";

export interface IProfilePicture {
	src: string;
	alt: string;
	height: string;
}

const ProfilePicture = ({ src, alt, height }: IProfilePicture) => {
	return (
		<div className={`relative rounded-full aspect-square w-auto ${height}`}>
			<Image
				src={src}
				alt={alt}
				layout="fill"
				style={{ borderRadius: "50%" }}
			/>
		</div>
	);
};

export default ProfilePicture;

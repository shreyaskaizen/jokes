import ProfilePicture from "../public/images/profile-picture.jpg";
import Image from "next/image";
import AvatarStyles from "../styles/component.Avatar.module.scss";

const { container, image } = AvatarStyles;
function Avatar() {
    return (
        <div className={container}>
            <Image
                className={image}
                src={ProfilePicture}
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
            />
        </div>
    );
}

export default Avatar;

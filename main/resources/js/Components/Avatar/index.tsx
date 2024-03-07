import { FC } from "react";

interface AvatarProp {
    src: string;
}
const Avatar: FC<AvatarProp> = ({ src }) => {
    return (
        <div className="mr-4">
            <img src={src} alt={src} className="w-16 h-16 rounded-full" />
        </div>
    );
};

export default Avatar;

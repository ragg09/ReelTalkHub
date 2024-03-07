import { FC } from "react";
import NameTtile from "./NameTtile";

import Avatar from "@/Components/Avatar";
import Button from "@/Components/Button";

interface MediaHeaderProps {
    avatar: string;
    name: string;
    title: string;
}
const MediaHeader: FC<MediaHeaderProps> = ({ avatar, name, title }) => {
    return (
        <div className="p-6 text-gray-900 dark:text-gray-100 flex items-center justify-between">
            <div className="flex items-center">
                <Avatar src={avatar} />
                <NameTtile name={name} title={title} />
            </div>

            <Button
                text="Follow"
                textColor="red"
                buttonColor="red"
                buttonStyle="border"
                onClick={() => {
                    alert("Add follow");
                }}
            />
        </div>
    );
};

export default MediaHeader;

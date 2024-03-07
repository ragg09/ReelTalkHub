import { FC } from "react";

interface NameTitleProps {
    name: string;
    title: string;
}
const NameTtile: FC<NameTitleProps> = ({ name, title }) => {
    return (
        <div>
            <div className="font-bold text-xl">{name}</div>
            <div>{title}</div>
        </div>
    );
};

export default NameTtile;

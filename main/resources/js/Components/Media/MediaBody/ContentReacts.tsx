import { FC } from "react";
import Reacts from "@/Components/Reacts";
import { AiFillLike, AiFillMessage, AiFillHeart } from "react-icons/ai";

interface ContentReactProps {}
const ContentReact: FC<ContentReactProps> = ({}) => {
    return (
        <div
            style={{
                flex: "1",
                padding: "5px",
                boxSizing: "border-box",
                alignSelf: "flex-end",
            }}
        >
            <Reacts
                count={1}
                onClick={() => {
                    alert("add Like");
                }}
            >
                <AiFillLike size="2em" color="white" />
            </Reacts>

            <Reacts
                count={0}
                onClick={() => {
                    alert("add heart");
                }}
            >
                <AiFillHeart size="2em" color="white" />
            </Reacts>

            <Reacts
                count={0}
                onClick={() => {
                    alert("go to specific content with commnets");
                }}
            >
                <AiFillMessage size="2em" color="white" />
            </Reacts>
        </div>
    );
};

export default ContentReact;

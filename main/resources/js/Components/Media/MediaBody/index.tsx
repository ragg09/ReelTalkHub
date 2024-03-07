import { FC } from "react";
import ContentReact from "./ContentReacts";

interface MediaBodyProps {
    type: "image" | "video";
    file: string;
}
const MediaBody: FC<MediaBodyProps> = ({ type, file }) => {
    return (
        <div style={{ display: "flex", height: "75vh" }}>
            {type === "image" && (
                <div
                    style={{
                        height: "100%",
                        width: "85%",
                        flex: "10",
                    }}
                >
                    <img
                        src={`http://localhost:8081/storage/media/${file}`}
                        alt={file}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            )}

            <ContentReact />
            {/* {type === "video" && (
                    <video controls className="w-full mt-4 rounded-lg">
                        <source src={link} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}  */}
        </div>
    );
};

export default MediaBody;

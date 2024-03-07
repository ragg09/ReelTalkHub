import { MediaData } from "@/Utils/types";

import MediaHeader from "./MediaHeader/indext";
import MediaBody from "./MediaBody";

interface MediaProps extends MediaData {}

export default function Media(props: MediaProps) {
    const { user, title, type, file } = props;
    const { avatar, name } = user;

    return (
        <div className="py-1">
            <div className="max-w-screen-md mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-sm sm:rounded-lg">
                    <MediaHeader avatar={avatar} name={name} title={title} />
                    <MediaBody type={type} file={file} />
                </div>
            </div>
        </div>
    );
}

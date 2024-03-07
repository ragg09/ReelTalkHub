import { FC, ReactNode } from "react";

interface ReactProps {
    children: ReactNode;
    count: number;
    onClick?: () => void;
}

const Reacts: FC<ReactProps> = ({ children, count, onClick }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full py-3">
            <div>
                <button onClick={onClick}>{children}</button>
            </div>
            <div className="text-white">{count}</div>
        </div>
    );
};

Reacts.defaultProps = {
    onClick: () => {},
};

export default Reacts;

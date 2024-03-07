import { Fragment, ReactNode } from "react";

interface HeaderProps {
    header?: ReactNode;
}

export default function Header({ header }: HeaderProps) {
    return (
        <Fragment>
            {header && (
                <header className="bg-white dark:bg-gray-800 shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}
        </Fragment>
    );
}

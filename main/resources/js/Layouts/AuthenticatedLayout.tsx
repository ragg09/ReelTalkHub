import { useState, PropsWithChildren, ReactNode, Fragment } from "react";
import { UserData } from "@/Utils/types";
import Navbar from "@/Components/Navbar";
import Header from "@/Components/Navbar/Header";

export default function Authenticated({
    user,
    header,
    children,
}: PropsWithChildren<{ user: UserData; header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <Fragment>
            <Navbar user={user} />

            <Header header={header} />

            <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
                <main className="py-20">{children}</main>
            </div>
        </Fragment>
    );
}

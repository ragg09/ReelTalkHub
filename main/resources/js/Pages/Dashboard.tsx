import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import { MediaData, UserData } from "@/Utils/types";
import { useGetMediaQuery } from "@/Redux/Services/mediaAPI";
import { useEffect, useState } from "react";
import { MEDIAREQUEST } from "@/Utils/Constants";
import LoadingSpinner from "@/Components/Loader";
import { setMediaData } from "@/Redux/Features/mediaSlice";
import Media from "@/Components/Media";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadMore from "@/Components/InfiniteScroll/LoadMore";
import EndMessage from "@/Components/InfiniteScroll/EndMessage";

interface DashboardProps<
    T extends Record<string, unknown> = Record<string, unknown>
> {
    auth: {
        user: UserData;
    };
}

export default function Dashboard({ auth }: DashboardProps) {
    const dispatch = useAppDispatch();
    const [currentPage, setCurrentPage] = useState(MEDIAREQUEST.page);
    const [hasMore, setHasMore] = useState(true);

    const { data, isLoading } = useGetMediaQuery({
        page: currentPage,
        perPage: MEDIAREQUEST.perPage,
    });

    const { data: mediaContent } = useAppSelector((state) => state.mediaSlice);

    useEffect(() => {
        if (!isLoading && data) {
            dispatch(setMediaData(data));

            if (data.current_page === data.last_page) {
                setHasMore(false);
            }
        }
    }, [isLoading, currentPage, data]);

    const loadNextPage = () => {
        setTimeout(() => {
            setCurrentPage((prevPage) => prevPage + 1);
        }, 1000);
    };

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <InfiniteScroll
                dataLength={mediaContent.length}
                next={loadNextPage}
                hasMore={hasMore}
                loader={<LoadMore />}
                endMessage={<EndMessage />}
            >
                {mediaContent.map((media: MediaData) => (
                    <Media key={media.id} {...media} />
                ))}
            </InfiniteScroll>
        </AuthenticatedLayout>
    );
}

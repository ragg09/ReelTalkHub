import { useApiUrl } from "@/Utils/Helpers/apiUrl";
import { MediaResponse } from "@/Utils/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mediaAPI = createApi({
    reducerPath: "mediaAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: useApiUrl(null),
    }),
    endpoints: (builder) => ({
        getMedia: builder.query<
            MediaResponse,
            { page: number; perPage: number }
        >({
            query: (options) => {
                const { page, perPage } = options;
                return `media?page=${page || 1}&perPage=${perPage || 3}`;
            },
        }),
    }),
});

export const { useGetMediaQuery } = mediaAPI;

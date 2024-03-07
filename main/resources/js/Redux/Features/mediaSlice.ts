import { MediaData, MediaResponse } from "@/Utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MediaState {
    data: MediaData[];
}

const initialState: MediaState = {
    data: [],
};

const mediaSlice = createSlice({
    name: "mediaData",
    initialState,
    reducers: {
        setMediaData: (state, action: PayloadAction<MediaResponse>) => {
            const newData = action.payload.data;

            const filtered = newData.filter(
                (item) =>
                    !state.data.some(
                        (existingItem) => existingItem.id === item.id
                    )
            );

            state.data.push(...filtered);
        },
    },
});

export const { setMediaData } = mediaSlice.actions;

export default mediaSlice.reducer;

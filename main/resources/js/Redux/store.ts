import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { mediaAPI } from "./Services/mediaAPI";
import mediaSliceReducer from "./Features/mediaSlice";

export const store = configureStore({
    reducer: {
        [mediaAPI.reducerPath]: mediaAPI.reducer,
        mediaSlice: mediaSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(mediaAPI.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

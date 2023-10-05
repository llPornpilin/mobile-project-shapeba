import { configureStore } from '@reduxjs/toolkit';
import frontEndSlice from './slice/frontEndSlice';

export const store = configureStore({
    reducer: {
        frontEndSlice: frontEndSlice
    }
});
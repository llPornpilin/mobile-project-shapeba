import { configureStore } from '@reduxjs/toolkit';
import frontEndSlice from './slice/frontEndSlice';
import mealsSlice from './slice/mealsSlice';

export const store = configureStore({
    reducer: {
        frontEnd: frontEndSlice,
        addMeals: mealsSlice,
    }
});
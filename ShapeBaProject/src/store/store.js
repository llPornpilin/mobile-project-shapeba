import { configureStore } from '@reduxjs/toolkit';
import frontEndSlice from './slice/frontEndSlice';
import mealsSlice from './slice/mealsSlice';
import processInfoSlice1 from './slice/processInfoSlice1';

export const store = configureStore({
    reducer: {
        frontEnd: frontEndSlice,
        addMeals: mealsSlice,
        processInfo: processInfoSlice1
        
    }
});
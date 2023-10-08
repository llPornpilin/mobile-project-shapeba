import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const frontEndSlice = createSlice({
    name: "frontend",
    //ตัวแปร
    initialState: {
        favorite: "Chocolate Bar",
        openStartDatePicker: false,
    },
    //function
    reducers: {
        setFavorite(state, action) {
            const isFav = state.favorite.some(
                (item) => item.title === action.payload.title
            );
            if (!isFav) {
                state.favorite.push(action.payload)
            }
            else {
                state.favorite = state.favorite.filter(
                    (item) => item.title !== action.payload.title
                );
            }
        },
        setOpenStartDatePicker(state, action) {
            state.openStartDatePicker = action.payload
        }
    }
})
export const { setFavorite, setOpenStartDatePicker } = frontEndSlice.actions
export const frontEndSelector = (store) => store.frontEnd;
export default frontEndSlice.reducer
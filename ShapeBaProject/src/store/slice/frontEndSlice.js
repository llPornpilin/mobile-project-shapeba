import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const frontEndSlice = createSlice({
    name: "frontend",
    //ตัวแปร
    initialState: {
        favorite: "",
        btnCheck: false
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
        setBtnCheck(state, action) {
            state.btnCheck = action.payload
        }
    }
})
// export const { setFavorite, setBtnCheck } = FavSlice.actions
// export const FavSelector = (store) => store.favorite;
export default frontEndSlice.reducer
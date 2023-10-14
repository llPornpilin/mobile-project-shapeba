import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const mealsSlice = createSlice({
    name: 'addMeal',
    initialState: {
        allMenus: [],
    },
    reducers: {
        setMenus(state, action) {
            // console.log("before add menu array lenght: " + state.allMenus.length)
            console.log("... set menu")
            if (state.allMenus.length === 0) {
                state.allMenus = [...state.allMenus, ...action.payload]
                // console.log("After add menu array lenght: " + state.allMenus.length)
            }
            return state
        },
        delMenu(state, action) {
            console.log("... remove menu")
            state.allMenus = []
        }
    }

})

export const { setMenus, delMenu } = mealsSlice.actions
export const addMealSelector = (store) => store.addMeals
export default mealsSlice.reducer
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'userInfo',
    initialState: {
        userId: '',
        userEmail: '',
        testUser: 'user store test'
    },
    reducers: {
        setUserId(state, action) {
            state.userId = action.payload
            console.log("set user id: " + state.userId)
        },
        setUserEmail(state, action) {
            state.userEmail = action.payload
            console.log("set email: " + state.userEmail)
        },

    }

})

export const { setUserId, setUserEmail } = userSlice.actions
export const userSelector = (store) => store.userInfo
export default userSlice.reducer
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    token: "",
    user: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userRegistration: (state, action: PayloadAction<{ token: string }>) => {
            state.token = action.payload.token
        },
        userLogin: (state, action: PayloadAction<{ accessToken: string, user: string }>) => {
            state.token = action.payload.accessToken
            state.user = action.payload.user
        },
        userLogout: (state,) => {
            state.token = ""
            state.user = ""
        }
    }
})

export const {userRegistration, userLogout, userLogin} = authSlice.actions
export default authSlice.reducer
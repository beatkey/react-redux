import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false,
    name: null,
    surName: null
}

const slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state) => {
            state.loggedIn = true
        },
        logout: (state) => {
            state.loggedIn = false
        },
        updateUser: (state, action) => {
            console.log(action.payload)
            state.name = action.payload.name
            state.surname = action.payload.surname
        }
    }
})

export const {login, logout, updateUser} = slice.actions
export default slice.reducer

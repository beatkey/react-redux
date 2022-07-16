import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    theme: "light"
}

const slice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light"
        }
    }
})

export const {changeTheme} = slice.actions
export default slice.reducer

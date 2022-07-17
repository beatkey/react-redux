import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    activeLanguage: "tr",
    languages: [
        {code: "tr", name: "Turkish"},
        {code: "en", name: "English"}
    ]
}

const slice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.activeLanguage = action.payload
        }
    }
})

export const {setLanguage} = slice.actions
export default slice.reducer

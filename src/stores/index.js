import {configureStore} from "@reduxjs/toolkit";

import theme from "./theme";
import auth from "./auth";

const store = configureStore({
    reducer: {
        theme,
        auth
    }
})

export default store

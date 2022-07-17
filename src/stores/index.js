import {configureStore} from "@reduxjs/toolkit";

import theme from "./theme";
import auth from "./auth";
import language from "./language";

const store = configureStore({
    reducer: {
        theme,
        auth,
        language
    }
})

export default store

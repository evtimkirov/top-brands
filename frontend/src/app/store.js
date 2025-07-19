import {configureStore} from "@reduxjs/toolkit";
import brandsReducer from "../features/brandsSlice.js";
import createBrandReducer from "../features/form/createBrandFormSlice.js"
import updateBrandReducer from "../features/form/updateBrandFormSlice.js"

export const store = configureStore({
    reducer: {
        brands: brandsReducer,
        createBrandForm: createBrandReducer,
        updateBrandForm: updateBrandReducer,
    }
});

import { createSlice } from '@reduxjs/toolkit';
import { updateBrandData } from '../../api/updateBrandsAPI.js';

const updateFormSlice = createSlice({
    name: 'updateBrandForm',
    initialState: {
        brand_name: '',
        brand_image: '',
        rating: '',
        status: 'idle',
        error: null,
        successMessage: null,
    },
    reducers: {
        setBrandName: (state, action) => {
            state.brand_name = action.payload;
        },
        setBrandImage: (state, action) => {
            state.brand_image = action.payload;
        },
        setRating: (state, action) => {
            state.rating = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateBrandData.pending, (state) => {
                state.status = 'loading';
                state.error = null;
                state.successMessage = null;
            })
            .addCase(updateBrandData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.successMessage = 'Brand updated successfully.';
            })
            .addCase(updateBrandData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const {
    setBrandName,
    setBrandImage,
    setRating
} = updateFormSlice.actions;

export default updateFormSlice.reducer;

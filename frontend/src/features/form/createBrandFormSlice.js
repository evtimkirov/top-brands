import { createSlice } from '@reduxjs/toolkit';
import { createBrandData } from '../../api/storeBrandsAPI.js';

const formSlice = createSlice({
    name: 'form',
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
            .addCase(createBrandData.pending, (state) => {
                state.status = 'loading';
                state.error = null;
                state.successMessage = null;
            })
            .addCase(createBrandData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.successMessage = 'Brand created successfully.';
            })
            .addCase(createBrandData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const {
    setBrandName,
    setBrandImage,
    setRating
} = formSlice.actions;

export default formSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';
import {fetchBrandData} from '../api/getBrandsAPI.js';
import { deleteBrand } from '../api/deleteBrandsAPI.js';

const brandsSlice = createSlice({
    name: 'brands',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        addBrand: (state, action) => {
            state.items.push(action.payload);
        },
        removeBrand: (state, action) => {
            const brandId = action.payload;

            state.items = state.items.filter(Brand => Brand.id !== brandId);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchBrandData.pending,
                (state) => {
                    state.loading = true;
                    state.error = null;
                })
            .addCase(
                fetchBrandData.fulfilled,
                (state, action) => {
                    state.loading = false;
                    state.items = action.payload;
                })
            .addCase(
                fetchBrandData.rejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                })
            .addCase(deleteBrand.fulfilled, (state, action) => {
                    const id = action.payload;
                    state.items = state.items.filter(item => item.id !== id);
                });
    },
});

export const { addBrand, removeBrand } = brandsSlice.actions;

export default brandsSlice.reducer;

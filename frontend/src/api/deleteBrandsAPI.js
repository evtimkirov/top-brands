import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BRANDS_URL, API_TOKEN } from '../constants/api.js';

axios.defaults.withCredentials = true;

export const deleteBrand = createAsyncThunk(
    'brands/delete',
    async (id) => {
        const response = await axios.delete(
            `${API_BRANDS_URL}/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                },
            }
        );

        return id;
    }
);

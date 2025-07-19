import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BRANDS_URL, API_TOKEN } from '../constants/api.js';

axios.defaults.withCredentials = true;

export const updateBrandData = createAsyncThunk(
    'brands/updateData',
    async (formData) => {
        const response = await axios.put(
            `${API_BRANDS_URL}/${formData.id}`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                },
            }
        );

        return response.data;
    }
);

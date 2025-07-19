import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BRANDS_URL, API_TOKEN } from '../constants/api.js';

axios.defaults.withCredentials = true;

export const createBrandData = createAsyncThunk(
    'brands/createData',
    async (formData) => {
        const response = await axios.post(
            API_BRANDS_URL,
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

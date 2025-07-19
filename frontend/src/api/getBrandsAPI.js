import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_BRANDS_URL, API_TOKEN} from "../constants/api.js";

axios.defaults.withCredentials = true;

export const fetchBrandData = createAsyncThunk(
    'brands/fetchData',
    async (country) => {
        const brands = await axios.get(API_BRANDS_URL, {
            headers: {
                Authorization: `Bearer ${API_TOKEN}`,
                'CF-IPCountry': country,
            }
        });

        return brands.data;
    });

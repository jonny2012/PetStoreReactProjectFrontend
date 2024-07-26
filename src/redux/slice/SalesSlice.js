import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const API_SALE_URL = 'http://localhost:3333/sales';


export const allSales = createAsyncThunk(
    'sales/all',

    async (
        _,
        thunkApi
    ) => {
        try {
            const response = await axios.get(`${API_SALE_URL}/all`);
            
            return response.data;
        } catch (error) {
            const message = error.response.data.message;
            return thunkApi.rejectWithValue({ message });
        }
    }
);

const salesSlice = createSlice({
    name: 'sale',
    initialState: { 
        data: [],
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: '',
    },
  
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(allSales.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(allSales.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
            })
            .addCase(allSales.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
            })
    
    },
});

export default salesSlice.reducer;
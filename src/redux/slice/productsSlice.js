import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const API_PRODUCTS_URL = 'http://localhost:3333/products';


export const productsAll = createAsyncThunk(
    'products/all',

    async (
        _,
        thunkApi
    ) => {
        try {
            const response = await axios.get(`${API_PRODUCTS_URL}/all`);
            
            return response.data;
        } catch (error) {
            const message = error.response.data.message;
            return thunkApi.rejectWithValue({ message });
        }
    }
);
export const productById= createAsyncThunk(
    'products/id',

    async (
        id,
        thunkApi
    ) => {
        try {
            const response = await axios.get(`${API_PRODUCTS_URL}/${id}`);
                console.log(response.data.product[0])
            return response.data.product[0] ;
        } catch (error) {
            const message = error.response.data.message;
            return thunkApi.rejectWithValue({ message });
        }
    }
);


const productSlice = createSlice({
    name: 'product',
    initialState: { 
        productsData: null,
        productData:[],
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: '',
    },
  
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productsAll.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(productsAll.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.productsData = action.payload;
            })
            .addCase(productsAll.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
            })
            .addCase(productById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(productById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.productData = action.payload;
            })
            .addCase(productById.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
            })
    
    },
});

export default productSlice.reducer;
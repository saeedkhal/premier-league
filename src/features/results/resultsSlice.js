import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchReults = createAsyncThunk('fetchReults', async () => {
    const res = await axios.get('/api/results');
    return res.data
})

const initialState = {
    loading: false,
    data: {},
    error: ''
}
const resultsSlice = createSlice({
    name: 'news',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchReults.pending, (state) => {
            state.loading = true
        })
            .addCase(fetchReults.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = '';
            })
            .addCase(fetchReults.rejected, (state, action) => {
                state.loading = false;
                state.data = [];
                state.error = action.error.message;
            })
    }
});


export default resultsSlice.reducer
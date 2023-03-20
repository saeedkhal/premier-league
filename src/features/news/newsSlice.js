import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchNews = createAsyncThunk('fetchNews', async () => {
    const res = await axios.get('/api/news');
    return res.data
})

const initialState = {
    loading: false,
    data: {},
    error: ''
}
const newsSlice = createSlice({
    name: 'news',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchNews.pending, (state) => {
            state.loading = true
        })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = '';
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.loading = false;
                state.data = [];
                state.error = action.error.message;
            })
    }
});


export default newsSlice.reducer
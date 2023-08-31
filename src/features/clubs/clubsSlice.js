import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";



export const getClubs = createAsyncThunk('getclubs', async () => {
    const res = await axios.get('/api/clubs.json');
    return res.data
});

const initialState = {
    loading: false,
    data: [],
    error: ''
}
const clubSlice = createSlice({
    name: 'clubs',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getClubs.pending, (state, action) => {
                state.loading = true;
                state.data = action.payload;
                state.error = ''
            })
            .addCase(getClubs.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = ''
            })
            .addCase(getClubs.rejected, (state, action) => {
                state.loading = false;
                state.data = [];
                state.error = action.error.message;
            })
    }
});
export default clubSlice.reducer
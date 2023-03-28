import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchPlayer = createAsyncThunk('fetchPlayer', async () => {
    const res = await axios.get('/api/players');
    return res.data
})

const initialState = {
    loading: false,
    data: {},
    error: ''
}
const playersSlice = createSlice({
    name: 'news',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPlayer.pending, (state) => {
            state.loading = true
        })
            .addCase(fetchPlayer.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = '';
            })
            .addCase(fetchPlayer.rejected, (state, action) => {
                state.loading = false;
                state.data = [];
                state.error = action.error.message;
            })
    }
});


export default playersSlice.reducer
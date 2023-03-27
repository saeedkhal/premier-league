import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchFixture = createAsyncThunk('fetchFixture', async () => {
    const res = await axios.get('/api/fixture');
    return res.data
})

const initialState = {
    loading: false,
    data: {},
    error: ''
}
const fixtureSlice = createSlice({
    name: 'news',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchFixture.pending, (state) => {
            state.loading = true
        })
            .addCase(fetchFixture.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = '';
            })
            .addCase(fetchFixture.rejected, (state, action) => {
                state.loading = false;
                state.data = [];
                state.error = action.error.message;
            })
    }
});


export default fixtureSlice.reducer
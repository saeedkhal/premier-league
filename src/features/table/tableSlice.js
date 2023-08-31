import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchTable = createAsyncThunk('fetchTable', async () => {
    const res = await axios.get('/api/table.json');
    return res.data
})

const initialState = {
    loading: false,
    data: {},
    error: ''
}
const tableSlice = createSlice({
    name: 'news',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTable.pending, (state) => {
            state.loading = true
        })
            .addCase(fetchTable.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = '';
            })
            .addCase(fetchTable.rejected, (state, action) => {
                state.loading = false;
                state.data = [];
                state.error = action.error.message;
            })
    }
});


export default tableSlice.reducer
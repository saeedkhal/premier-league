import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchEvents = createAsyncThunk('events/fetchEvent', async () => {
    const res = await axios.get('/api/events');
    return res.data
})

const initialState = {
    loading: false,
    data: [],
    error: ''
}
const eventsSlice = createSlice({
    name: 'events',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchEvents.pending, (state) => {
            state.loading = true
        })
            .addCase(fetchEvents.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = '';
            })
            .addCase(fetchEvents.rejected, (state, action) => {
                state.loading = false;
                state.data = [];
                state.error = action.error.message;
            })
    }
});


export default eventsSlice.reducer
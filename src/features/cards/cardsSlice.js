import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCards = createAsyncThunk('feachcards', async() =>{
    const res = await axios.get('/api/featured-cards');
    return res.data
})

const initialState = {
    loading: false,
    data: [],
    error: ''
}
const cardSlice = createSlice({
    name:'cards',
    initialState,

    extraReducers:(builder) =>{
        builder
        .addCase(fetchCards.pending, (state,action)=>{
            state.loading = true;
            state.data=action.payload;
            state.error=''
        }) 
        .addCase(fetchCards.fulfilled, (state,action)=>{
            state.loading = false;
            state.data = action.payload;
            state.error=''
        })
        .addCase(fetchCards.rejected, (state,action)=>{
            state.loading = false;
            state.data=[];
            state.error= action.error.message;
        })
    }
});

export default cardSlice.reducer;
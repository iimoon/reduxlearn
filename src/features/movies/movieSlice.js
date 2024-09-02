import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies:{}
}

const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        //action
        //takes initialState and the payload
        addMovies:(state,{payload})=>{
            //when paylaod is recieved it updates state of the movies 
            state.movies = payload;
            //{...state,payload} (...state is initialPayload), 
            //new redux uses MA internally so
        }
    },
    //common method to invoke but different types of action
    //extraReducers:{}
})

//action to import to home component 
export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
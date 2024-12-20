import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  movies: [],
  selectedMovie: null,
  status: 'idle',
  error: null,
};

export const fetchMovies = createAsyncThunk('latest/fetchMovies', async () => {
  const response = await axios.get('http://3.17.216.66:4000/latest'); // Replace with your API URL
  return response.data;
});

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    selectMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { selectMovie } = movieSlice.actions;

export default movieSlice.reducer;

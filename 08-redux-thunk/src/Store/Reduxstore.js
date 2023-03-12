import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk("fetchingPhotos", async () => {
  const res = await fetch("https://picsum.photos/v2/list");
  const formattedRes = await res.json();
  return formattedRes;
});

const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    photos: [],
    isLoading: true,
  },

  extraReducers: {
    [getPhotos.pending](state) {
      state.isLoading = true;
    },
    [getPhotos.fulfilled](state, action) {
      state.isLoading = false;
      state.photos = action.payload;
    },
    [getPhotos.rejected](state) {
      state.isLoading = false;
    },
  },
});

export const store = configureStore({
  reducer: gallerySlice.reducer,
});

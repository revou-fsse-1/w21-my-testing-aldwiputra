import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  firstName: '',
  lastName: '',
  occupation: '',
  twitter: '',
  bio: '',
  imgUrl: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeFirstname: (state, action) => {
      state.firstName = action.payload;
    },
    changeLastname: (state, action) => {
      state.lastName = action.payload;
    },
    changeOccupation: (state, action) => {
      state.occupation = action.payload;
    },
    changeTwitter: (state, action) => {
      state.twitter = action.payload;
    },
    changeBio: (state, action) => {
      state.bio = action.payload;
    },
    changeImgUrl: (state, action) => {
      state.imgUrl = action.payload;
    },
    resetForm: (state) => {
      state.firstName = '';
      state.lastName = '';
      state.occupation = '';
      state.twitter = '';
      state.imgUrl = '';
      state.bio = '';
    },
  },
});

export const {
  changeFirstname,
  changeLastname,
  changeOccupation,
  changeTwitter,
  changeBio,
  changeImgUrl,
  resetForm,
} = formSlice.actions;

export default formSlice.reducer;

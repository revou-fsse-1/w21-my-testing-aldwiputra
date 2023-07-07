import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  occupation: '',
  twitter: '',
  bio: '',
  imgUrl: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState: { form: initialState },
  reducers: {
    changeFirstname: (state, action) => {
      state.form.firstName = action.payload;
    },
    changeLastname: (state, action) => {
      state.form.lastName = action.payload;
    },
    changeOccupation: (state, action) => {
      state.form.occupation = action.payload;
    },
    changeTwitter: (state, action) => {
      state.form.twitter = action.payload;
    },
    changeBio: (state, action) => {
      state.form.bio = action.payload;
    },
    changeImgUrl: (state, action) => {
      state.form.imgUrl = action.payload;
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
} = formSlice.actions;

export default formSlice.reducer;

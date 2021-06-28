import { createSlice } from '@reduxjs/toolkit';
export const userSlice = createSlice({
  name: 'user',
  initialState:{
   user:null,
  },
  reducers: {
    
    logOut: (state) => {
      state.user=null
    },

    logIn:(state, action) =>{
      state.user = action.payload
    }

  },
  

});

export const {logIn, logOut } = userSlice.actions;


export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

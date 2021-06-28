import { createSlice } from '@reduxjs/toolkit';
export const MailSlice = createSlice({
  name: 'Mail',
  initialState:{
    sendMessageIsOpen: false,
    selectedMail: null
  },
  reducers: {
    openSendMessage: (state) => {
     
      state.sendMessageIsOpen=true
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen=false
    },

    selectMail:(state, action) =>{
      state.selectedMail = action.payload
    }

  },
  

});

export const {openSendMessage, closeSendMessage, selectMail } = MailSlice.actions;


export const selectSendMessageIsOpen = (state) => state.Mail.sendMessageIsOpen;

export const selectOpenMail = (state) => state.Mail.selectedMail;


export default MailSlice.reducer;

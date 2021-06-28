import { configureStore } from '@reduxjs/toolkit';
import MailReducer from '../features/MailSlice';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    Mail: MailReducer,
    user: userReducer,
  },
});

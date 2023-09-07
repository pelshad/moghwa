import { configureStore } from '@reduxjs/toolkit';
import account from './slice/accountSlice';

const store = configureStore({
    reducer: { account },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;

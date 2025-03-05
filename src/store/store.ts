import { configureStore } from '@reduxjs/toolkit';
import counterReducer  from './slices/counterSlices';

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Adiciona o reducer do contador ao store
  },
});

// Tipos para usar com useSelector e useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

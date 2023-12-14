import { combineReducers, configureStore, Middleware, Dispatch } from "@reduxjs/toolkit";
import { articleSlice, reducer } from "@app/redux/article/article.slice";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  storage: AsyncStorage,
  key: 'root',
};


const rootReducer = combineReducers({
  articleSlice: articleSlice.reducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware: Middleware<object, any, Dispatch>[] = [];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(...middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()

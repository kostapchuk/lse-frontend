import {configureStore} from '@reduxjs/toolkit';
import {protectedApi} from "../slices/protectedApiSlice";
import {rootReducer, RootState} from '../reducers/rootReducer';
import storage from 'redux-persist/lib/storage'
import { persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import {publicApi} from "../slices/publicApiSlice";

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(protectedApi.middleware).concat(publicApi.middleware),
    devTools: true
});

export const persistor = persistStore(store);

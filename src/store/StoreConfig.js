import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import Storage from "@react-native-community/async-storage";

import AuthReducer from "./reducers/AuthReducer";

const persistConfig = {
    key: 'root',
    storage: Storage,
};

const rootReducer = combineReducers({
    Auth: AuthReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistStor = persistStore(store);
export { store, persistStor };
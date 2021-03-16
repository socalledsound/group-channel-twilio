import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { usersReducer } from './users/users.slice';
import TwilioMiddleware from './twilio/twilio.middleware';
import { deviceReducer } from './twilio/device.slice';


const rootReducer = combineReducers({
    users : usersReducer,
    device : deviceReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist : ['users']
}

const persist = persistReducer(persistConfig, rootReducer);

export const store = createStore(
                    persist,
                    applyMiddleware(TwilioMiddleware)
                    );

export const persistor = persistStore(store);                    
import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
  Store,
  AnyAction,
} from "redux";
import authReducer from "./authReducer/authReducer";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";
import homeReducer from "./homeReducer/homeReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const authPersistConfig = {
  key: "authState",
  storage,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers<AppState>({
  authReducer: persistReducer(
    authPersistConfig,
    authReducer
  ) as typeof authReducer,
  homeReducer: homeReducer,
});

export const store: Store<AppState, AnyAction> & {
  dispatch: DispatchActionType;
} = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

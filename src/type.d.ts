interface userDetailsType {
  entityId: string;
  name: string;
  avatarId: number;
  username: string;
  password: string;
  socketid: string;
}

interface authStateType {
  isLoader: boolean;
  token: string;
  isLoggedIn: boolean;
  userDetails: userDetailsType;
  message: {
    text: string;
    status: "success" | "error";
  };
}

interface homeStateType {
  tab: "My group" | "All group";
}

interface AppState {
  authReducer: authStateType;
  homeReducer: homeStateType;
}

interface ActionType {
  type: string;
  payload: any;
}

type AppDispatch = ThunkDispatch<AppState, any, AnyAction>;

type DispatchActionType = (arg0: ActionType) => void;

declare module "redux-persist/lib/storage";

declare module "redux-persist/lib/persistReducer";

declare module "redux-persist/integration/react";
declare module "redux-persist/lib/persistStore";

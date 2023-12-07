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

interface groupDetailType {
  entityId: string;
  groupName: string;
  ownerId: string;
  people: string[];
  createdDate: string;
}

interface homeStateType {
  tab: "My group" | "All group";
  myAllGroup: groupDetailType[];
  allGroup: groupDetailType[];
  groupDetail: groupDetailType;
}

interface chatStateType {
  peopleProfile: userDetailsType[];
}

interface AppState {
  authReducer: authStateType;
  homeReducer: homeStateType;
  chatReducer: chatStateType;
}

interface ActionType {
  type: string;
  payload: any;
  entityId?: string;
}

type AppDispatch = ThunkDispatch<AppState, any, AnyAction>;

type DispatchActionType = (arg0: ActionType) => void;

declare module "redux-persist/lib/storage";

declare module "redux-persist/lib/persistReducer";

declare module "redux-persist/integration/react";
declare module "redux-persist/lib/persistStore";

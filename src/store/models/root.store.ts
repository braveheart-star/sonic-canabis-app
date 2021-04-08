import authStore, { AuthModel } from "./auth.store";

export interface RootModel {
  authStore: AuthModel;
}

const rootStore: RootModel = {
  authStore,
};

export default rootStore;

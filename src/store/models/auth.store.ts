import { action, Action, Computed, computed, Thunk, thunk } from "easy-peasy"
import { post as postRequest } from "../api"
import { RootModel } from "./root.store"

interface AuthState {
  accessToken: string
  loggedStatus: Computed<this, boolean>
}

interface AuthActions {
  setAccessToken: Action<this, string>
}
interface AuthThunk {
  authRegisterThunk: Thunk<this, FormData>
  authLoginThunk: Thunk<this, FormData, undefined, RootModel>
  resetMailThunk: Thunk<this, FormData, undefined, RootModel>
  resetPasswordThunk: Thunk<this, FormData, undefined, RootModel>
}

export interface AuthModel extends AuthState, AuthActions, AuthThunk {}

const authStore: AuthModel = {
  accessToken: "",
  loggedStatus: computed((state) => state.accessToken.length > 0),
  /**
   * ACTIONS
   */
  setAccessToken: action((state, payload) => {
    state.accessToken = payload
  }),
  /**
   * THUNKS
   */
  authRegisterThunk: thunk(async (_, payload) => {
    const response = await postRequest({
      url: "/user/signup",
      body: payload,
    })
    if (response?.status === 200) {
      console.log("auth response ===> ", response)
    }
    return response
  }),

  authLoginThunk: thunk(async (actions, payload) => {
    try {
      const response = await postRequest({
        url: "/user/auth",
        body: payload,
      })
      console.log("response=>", response)

      if (response?.status === 200) {
        actions.setAccessToken(response.data.token)
      }
      return response.data
    } catch (e) {
      return e
    }
  }),

  resetMailThunk: thunk(async (payload, _) => {
    try {
      const response = await postRequest({
        url: "/user/resetpass",
        body: payload,
      })
      console.log("response=>", response)
      return response.data
    } catch (e) {
      return e
    }
  }),

  resetPasswordThunk: thunk(async (payload, _) => {
    try {
      const response = await postRequest({
        url: "/user/reset_password",
        body: payload,
      })
      console.log("resetPasswordThunk=>", response.data)
      return response.data
    } catch (e) {
      return e
    }
  }),
}
export default authStore

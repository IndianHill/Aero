import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  twitterLoginRequest: null,
  facebookLoginRequest: null,
  googleLoginRequest: null,
  phoneLoginRequest: null,
  loginRequest: ['username', 'password'],
  loginSuccess: ['user'],
  loginFailure: ['error'],
  logout: null
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  username: null,
  user: null,
  error: null,
  fetching: false
})

/* ------------- Reducers ------------- */

// we're attempting to login
export const request = (state) => state.merge({ fetching: true })

// we've successfully logged in
export const success = (state, { user }) =>
  state.merge({ fetching: false, error: null, user })

// we've had a problem logging in
export const failure = (state, { error }) =>
  state.merge({ fetching: false, error })

// we've logged out
export const logout = (state) => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TWITTER_LOGIN_REQUEST]: request,
  [Types.FACEBOOK_LOGIN_REQUEST]: request,
  [Types.GOOGLE_LOGIN_REQUEST]: request,
  [Types.PHONE_LOGIN_REQUEST]: request,
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  [Types.LOGOUT]: logout
})

/* ------------- Selectors ------------- */

// Is the current user logged in?
export const isLoggedIn = (state) => state.user !== null

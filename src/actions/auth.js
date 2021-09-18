import axios from 'axios'

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS, 
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types'

// CHECK TOKEN & LOAD THE USER 
export const loadUser = () => (dispatch, getState) => {
  // User Loading 
  dispatch({ type: USER_LOADING })

  axios.get('http://localhost:8000/auth/user', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    })
}

// REGISTER USER 
export const register = ({username, password, email}) => (dispatch) => {
  // User Loading 
  dispatch({ type: USER_LOADING })

  // Headers 
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  // Request body 
  const body = JSON.stringify({ username, password, email })

  axios.post('http://localhost:8000/auth/register', body, config)
    .then(res => {
      dispatch({
        type:REGISTER_SUCCESS,
        payload: res.data
      })
    })
}

// LOGIN USER 
export const login = (username, password) => (dispatch) => {
  // User Loading 
  dispatch({ type: USER_LOADING })

  // Headers 
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  // Request body 
  const body = JSON.stringify({ username, password })

  axios.post('http://localhost:8000/auth/login', body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    })
}

// LOGOUT USER 
export const logout = () => (dispatch, getState) => {

  axios.post('http://localhost:8000/auth/logout', null, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: LOGOUT_SUCCESS
      })
    })
    
}

// Setup config with token - helper function 
export const tokenConfig = (getState) => {

  // Get token from state 
  const token = getState().auth.token

  // Headers 
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // If token, add to headers config 
  if(token) {
    config.headers['Authorization'] = `Token ${token}`
  }

  return config
}

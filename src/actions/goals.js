import axios from 'axios'
import { tokenConfig } from './auth'

import {
  GET_GOALS,
  DELETE_GOAL,
  ADD_GOAL,
  UPDATE_GOAL,
} from './types'

// GET 
export const getGoals = () => (dispatch, getState) => {
  axios.get('http://localhost:8000/goals/', tokenConfig(getState))
  .then(res => {
    dispatch({
      type: GET_GOALS,
      payload: res.data 
    })
  })
  .catch(err => console.log(err))
}

// DELETE 
export const deleteGoal = (id) => (dispatch, getState) => {
  axios.delete(`http://localhost:8000/goals/${id}/`, tokenConfig(getState))
  .then(res => {
    dispatch({
      type: DELETE_GOAL,
      payload: id
    })
  })
  .catch(err => console.log(err))
}

// ADD 
export const addGoal = (goal) => (dispatch, getState) => {
  axios.post('http://localhost:8000/goals/', goal, tokenConfig(getState))
  .then(res => {
    dispatch({
      type: ADD_GOAL,
      payload: res.data 
    })
  })
  .catch(err => console.log(err))
}

// UPDATE 
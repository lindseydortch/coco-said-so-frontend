import axios from 'axios'

import {
  GET_GOALS,
  DELETE_GOAL,
  ADD_GOAL,
  UPDATE_GOAL,
} from './types'

// GET 
export const getGoals = () => dispatch => {
  axios.get('http://localhost:8000/goals/')
  .then(res => {
    dispatch({
      type: GET_GOALS,
      payload: res.data 
    })
  })
  .catch(err => console.log(err))
}

// DELETE 
export const deleteGoal = (id) => dispatch => {
  axios.delete(`http://localhost:8000/goals/${id}/`)
  .then(res => {
    dispatch({
      type: DELETE_GOAL,
      payload: id
    })
  })
  .catch(err => console.log(err))
}

// ADD 
export const addGoal = (goal) => dispatch => {
  axios.post('http://localhost:8000/goals/', goal)
  .then(res => {
    dispatch({
      type: ADD_GOAL,
      payload: res.data 
    })
  })
  .catch(err => console.log(err))
}

// UPDATE 
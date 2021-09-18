import axios from 'axios'
import { tokenConfig } from './auth'

import {
  GET_PHOTOGRAPHERS,
  DELETE_PHOTOGRAPHER,
  ADD_PHOTOGRAPHER,
  UPDATE_PHOTOGRAPHER
} from './types'

// GET 
export const getPhotographers = () => (dispatch, getState) => {
  axios.get('http://localhost:8000/photographers/', tokenConfig(getState))
  .then(res => {
    dispatch({
      type: GET_PHOTOGRAPHERS,
      payload: res.data 
    })
  })
  .catch(err => console.log(err))
}

// DELETE 
export const deletePhotographer = (id) => (dispatch, getState) => {
  axios.delete(`http://localhost:8000/photographers/${id}/`, tokenConfig(getState))
  .then(res => {
    dispatch({
      type: DELETE_PHOTOGRAPHER,
      payload: id
    })
  })
  .catch(err => console.log(err))
}

// ADD 
export const addPhotographer = (photographer) => (dispatch, getState) => {
  axios.post('http://localhost:8000/photographers/', photographer, tokenConfig(getState))
  .then(res => {
    dispatch({
      type: ADD_PHOTOGRAPHER,
      payload: res.data 
    })
  })
  .catch(err => console.log(err))
}

// UPDATE 
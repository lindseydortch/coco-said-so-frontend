import axios from 'axios'

import {
  GET_PHOTOGRAPHERS,
  DELETE_PHOTOGRAPHER,
  ADD_PHOTOGRAPHER,
  UPDATE_PHOTOGRAPHER
} from './types'

// GET 
export const getPhotographers = () => dispatch => {
  axios.get('http://localhost:8000/photographers/')
  .then(res => {
    dispatch({
      type: GET_PHOTOGRAPHERS,
      payload: res.data 
    })
  })
  .catch(err => console.log(err))
}

// DELETE 
export const deletePhotographer = (id) => dispatch => {
  axios.delete(`http://localhost:8000/photographers/${id}/`)
  .then(res => {
    dispatch({
      type: DELETE_PHOTOGRAPHER,
      payload: id
    })
  })
  .catch(err => console.log(err))
}

// ADD 
export const addPhotographer = (photographer) => dispatch => {
  axios.post('http://localhost:8000/photographers/', photographer)
  .then(res => {
    dispatch({
      type: ADD_PHOTOGRAPHER,
      payload: res.data 
    })
  })
  .catch(err => console.log(err))
}

// UPDATE 
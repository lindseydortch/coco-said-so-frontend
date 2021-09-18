import axios from 'axios'
import { tokenConfig } from './auth' 

import {
  GET_AGENCIES,
  DELETE_AGENCY,
  ADD_AGENCY,
  UPDATE_AGENCY,
} from './types'

// GET 
export const getAgencies = () => (dispatch, getState) => {
  axios.get('http://localhost:8000/agency/', tokenConfig(getState))
  .then(res => {
    dispatch({
      type: GET_AGENCIES,
      payload: res.data 
    })
  })
  .catch(err => console.log(err))
}

// DELETE 
export const deleteAgency = (id) => (dispatch, getState) => {
  axios.delete(`http://localhost:8000/agency/${id}/`, tokenConfig(getState))
  .then(res => {
    dispatch({
      type: DELETE_AGENCY,
      payload: id
    })
  })
  .catch(err => console.log(err))
}

// ADD 
export const addAgency = (agency) => (dispatch, getState) => {
  axios.post('http://localhost:8000/agency/', agency, tokenConfig(getState))
  .then(res => {
    dispatch({
      type: ADD_AGENCY,
      payload: res.data 
    })
  })
  .catch(err => console.log(err))
}

// UPDATE 
import axios from 'axios'

import {
  GET_AGENCIES,
  DELETE_AGENCY,
  ADD_AGENCY,
  UPDATE_AGENCY,
} from './types'

// GET 
export const getAgencies = () => dispatch => {
  axios.get('http://localhost:8000/agency/')
  .then(res => {
    dispatch({
      type: GET_AGENCIES,
      payload: res.data 
    })
  })
  .catch(err => console.log(err))
}

// DELETE 
export const deleteAgency = (id) => dispatch => {
  axios.delete(`http://localhost:8000/agency/${id}/`)
  .then(res => {
    dispatch({
      type: DELETE_AGENCY,
      payload: id
    })
  })
  .catch(err => console.log(err))
}

// ADD 
export const addAgency = (agency) => dispatch => {
  axios.post('http://localhost:8000/agency/', agency)
  .then(res => {
    dispatch({
      type: ADD_AGENCY,
      payload: res.data 
    })
  })
  .catch(err => console.log(err))
}

// UPDATE 
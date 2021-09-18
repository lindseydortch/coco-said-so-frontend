import { combineReducers } from 'redux'
import agencies from './agencies'
import photographers from './photographers'
import goals from './goals'
import auth from './auth'

export default combineReducers({
  agencies,
  photographers,
  goals,
  auth
})
import { combineReducers } from 'redux'
import agencies from './agencies'
import photographers from './photographers'
import goals from './goals'

export default combineReducers({
  agencies,
  photographers,
  goals
})
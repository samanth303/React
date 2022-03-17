import { combineReducers } from 'redux'
import UploadFile from './uploadFile/uploadFileReducer.js'

const rootReducer = combineReducers({
  UploadFile,
})

export default rootReducer

import {combineReducers} from 'redux'
import { rootReducers } from './users'

const AllReducers = combineReducers({
    users: rootReducers,
   
})

export default AllReducers
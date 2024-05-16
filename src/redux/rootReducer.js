import {combineReducers} from 'redux'
import { cartData } from './reducer'
import { productData } from './productReducer'
import {  playerData, teamData } from './playerReducer'
export default combineReducers({
    // cartData,
    // productData,
    playerData,
    teamData
})

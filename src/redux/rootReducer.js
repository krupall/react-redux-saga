import {combineReducers} from 'redux'
import { cartData } from './reducer'
import { productData } from './productReducer'
import {  playerData } from './playerReducer'
export default combineReducers({
    // cartData,
    // productData,
    playerData
})
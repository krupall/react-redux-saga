import { SET_PLAYER_LIST } from "./constant"



export const playerData = (data = [], action) => {
    console.warn("playerData - REDUCER called ")
    switch (action.type) {
            case SET_PLAYER_LIST:
                console.warn("PLAYER_LIST condition ", action)
                return [...action.data]
        default:
            return data
    }
}
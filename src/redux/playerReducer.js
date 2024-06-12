import { SET_PLAYER_LIST, SET_TEAM_LIST,PLAYER_SOLD, UPDATE_TEAM_PLAYERS } from "./constant"



export const playerData = (data = [], action) => {
    console.warn("playerData - REDUCER called ")
    switch (action.type) {
            case SET_PLAYER_LIST:
                console.warn("PLAYER_LIST condition ", action)
                return [...action.data]
                case PLAYER_SOLD:
                console.warn("PLAYER_SOLD condition ", action)
                return [...action.data]
        default:
            return data
    }
}

export const teamData = (data = [], action) => {
    console.warn("teamData - REDUCER called ")
    switch (action.type) {
            case SET_TEAM_LIST:
                console.warn("TEAM_LIST condition ", action)
                return [...action.data]
                case UPDATE_TEAM_PLAYERS:
                    console.warn("UPDATE_TEAM_PLAYERS condition ", action)
                    return [...action.data]
        default:
            return data
    }
}

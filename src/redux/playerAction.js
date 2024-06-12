import { PLAYER_LIST, TEAM_LIST, PLAYER_SOLD, UPDATE_TEAM_PLAYERS } from "./constant"

export const playerlist = () => {
  
    return {
        type: PLAYER_LIST,
    }
}

export const teamlist = () => {
  
    return {
        type: TEAM_LIST,
    }
}

export const salePlayer = (data) => {
  
    return {
        type: PLAYER_SOLD,
        data: data
    }
}

export const updateTeamPlayer = (data) => {
  
    return {
        type: UPDATE_TEAM_PLAYERS,
        data: data
    }
}



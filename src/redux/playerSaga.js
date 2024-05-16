import { takeEvery, put, all } from 'redux-saga/effects'
import { PLAYER_LIST, SET_PLAYER_LIST, SET_TEAM_LIST, TEAM_LIST } from './constant';


function* getPlayers() {
    let data = require('../playerlist.json');
    console.warn("action is called player", data)
    yield put({type: SET_PLAYER_LIST, data})
}
function* getTeams() {
    let data = require('../teamlist.json');
    data = data.teamList
    console.warn("team is called ", data)
    yield put({type: SET_TEAM_LIST, data})
}


function* playerSaga() {
    console.warn("playerSaga called ")
    yield all([
        takeEvery(PLAYER_LIST, getPlayers),
        takeEvery(TEAM_LIST, getTeams),
    ]);

}


export default playerSaga;

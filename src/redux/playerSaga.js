import { takeEvery, put } from 'redux-saga/effects'
import { PLAYER_LIST, SET_PLAYER_LIST } from './constant';


function* getPlayers() {
    let data = require('../playerlist.json');
    console.warn("action is called player", data)
    yield put({type: SET_PLAYER_LIST, data})
}

function* playerSaga() {
    console.warn("playerSaga called ")
    yield takeEvery(PLAYER_LIST, getPlayers)
}

export default playerSaga;
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { playerlist } from '../redux/playerAction';
import { useEffect } from "react";

function Player(){
    
    const userID = useParams('id').id;const dispatch = useDispatch();
    let data = useSelector((state)=>state.playerData);
    useEffect(() => {
        dispatch(playerlist())
    },[userID])
    const player = data.filter(e => e.id == userID);
    console.log(player[0].id)
    return (<div>{player[0]?.profile?.name}</div>)
}

export default Player;
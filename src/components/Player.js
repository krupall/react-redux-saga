import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { playerlist } from '../redux/playerAction';
import { useEffect, useState } from "react";
import TeamSummary from "./TeamSummery";

function Player(){
    
    const userID = useParams('id').id;
    const dispatch = useDispatch();
    let data = useSelector((state)=>state.playerData);
    const [team, setTeam] = useState('');
    const [initialValue, setInitialValue] = useState(1000);
  
    const player = data.filter(e => e.id == userID);
    function updateBid (cat) {
       console.log(cat);
       if(cat === 'Gold'){
        setInitialValue(initialValue + 1000)
       } else setInitialValue(initialValue + 500)
    }
    console.log(player[0].id)
    // const getInitialValue = (cat) => {
    //     if(player[0].category === 'Gold'){
    //         setInitialValue(8000);
    //     } 
    //     if(player[0].category === 'Silver'){
    //         setInitialValue(5000);
    //     }  
    //     return initialValue
    // }
   
    return (
    <div>
         <div>{player[0]?.profile?.name}</div>
         <div>{player[0]?.profile?.about}</div>
         <div>{player[0]?.profile?.dob}</div>
         <div>{player[0]?.profile?.address}</div>
         <div>{player[0]?.category}</div>
         <div><img src={player[0]?.picture}/></div>
         <div>{player[0]?.profile?.roles}</div>
         <div>{player[0]?.profile?.name}</div>
         <input type="text" className="m-2" value={initialValue}/>
         <button className="btn btn-outline-danger" onClick={() =>updateBid(player[0]?.category)}> + </button>
        
        <TeamSummary players={false} selectedteam={team} ></TeamSummary>
    </div>
   )
}

export default Player;

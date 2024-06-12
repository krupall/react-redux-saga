import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { salePlayer, updateTeamPlayer } from '../redux/playerAction';
import { useEffect, useState } from "react";
import TeamSummary from "./TeamSummery";
import './player.scss';

function Player() {

   const userID = useParams('id').id;
   const dispatch = useDispatch();
   let data = useSelector((state) => state.playerData);
   let teamData = useSelector((state) => state.teamData);
   const [team, setTeam] = useState('');
   const [selectedTeam, setselectedTeam] = useState('');
   const player = data.filter(e => e.id == userID);
   const [playerStatus, setPlayerStatus] = useState('Sold');
   const [initialValue, setInitialValue] = useState(player[0]?.initialValue || 1000);
   let teamList = useSelector((state) => state.teamData);

   useEffect(() => {
      if (!player[0]?.sold) {
         setPlayerStatus('Sale')
      }
   }, [userID, playerStatus])

   function updateBid(cat) {
      if (cat === 'Gold') {
         setInitialValue(initialValue + 1000)
      } else setInitialValue(initialValue + 500)
   }

   function teamClick(teamName, player) {
      updateBid(player[0]?.category)
      setselectedTeam(teamName)
   }

   function updatePlayerData() {
      data.map((e) =>{
         if(e.id == userID){
            e.team = selectedTeam;
            e.initialValue = initialValue;
            e.sold = true;
         }
      })

      return data;
   }

   function updateTeamData(){
      console.log(teamData)
      teamData.map((e) => {
         if(e.teamName == selectedTeam){
            e.totalBuget = e.totalBuget - initialValue;
            e.playerList.push(userID);
         }})
      return teamData;
   }

   function sold() {
      dispatch(salePlayer(updatePlayerData()));
      dispatch(updateTeamPlayer(updateTeamData()));
      setPlayerStatus('Sold');
   }

   function bidValueChange(e) {
      let value = e.target.value
      setInitialValue(parseInt(value));
   }

   return (
      <div>
         {/* player info */}
         <div>{player[0]?.profile?.name}</div>
         <div>{player[0]?.profile?.about}</div>
         <div>{player[0]?.profile?.dob}</div>
         <div>{player[0]?.profile?.address}</div>
         <div>{player[0]?.category}</div>
         <div><img src={player[0]?.picture} /></div>
         <div>{player[0]?.roles}</div>
         <div>{player[0]?.profile?.name}</div>

          {/* Action */}
         <input className="m-2" type='number' disabled={playerStatus === 'Sold'} value={initialValue} onChange={(e) => bidValueChange(e)} />
         <button className="btn btn-outline-danger" disabled={playerStatus === 'Sold'}  onClick={() => updateBid(player[0]?.category)}> + </button>
         <p className="m-1">{selectedTeam && playerStatus !== 'Sold' &&  (<div>Last Bid by: {selectedTeam}</div>)} <button className="btn btn-lg btn-success btn-block m-3" disabled={playerStatus === 'sold' || selectedTeam === ''} onClick={() => sold(selectedTeam)}>{playerStatus} </button></p>
      
          {/* Sold */}
<p className="m-2">{playerStatus === 'Sold' && <span>Sold to <b>{player[0]?.team}</b> in <b>{player[0]?.initialValue}</b> Points</span> }</p>
        
          {/* Teams */}

         <div className="teamArea">
            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
               <div class="btn-group mr-2" role="group" aria-label="First group">
                  {teamList.length && teamList.map(e => (
                     <>
                        <button type="button" className="btn btn-outline-secondary ml-1" disabled={playerStatus === 'Sold'} onClick={() => teamClick(e.teamName, player)}>  {e.teamName}</button>
                     </>
                  ))}  </div></div>
         </div>
      </div>
   )
}

export default Player;

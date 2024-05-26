import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { salePlayer } from '../redux/playerAction';
import { useEffect, useState } from "react";
import TeamSummary from "./TeamSummery";
import './player.scss';

function Player() {

   const userID = useParams('id').id;
   const dispatch = useDispatch();
   let data = useSelector((state) => state.playerData);
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
   }, [userID])

   function updateBid(cat) {
      if (cat === 'Gold') {
         setInitialValue(initialValue + 1000)
      } else setInitialValue(initialValue + 500)
   }

   function teamClick(teamName, player) {
      updateBid(player[0]?.category)
      setselectedTeam(teamName)
   }

   function sold() {
      dispatch(salePlayer({player:player,team:selectedTeam }));
      console.log(initialValue)
   }

   function bidValueChange(e) {
      let value = e.target.value
      setInitialValue(parseInt(value));
   }

   return (
      <div>
         <div>{player[0]?.profile?.name}</div>
         <div>{player[0]?.profile?.about}</div>
         <div>{player[0]?.profile?.dob}</div>
         <div>{player[0]?.profile?.address}</div>
         <div>{player[0]?.category}</div>
         <div><img src={player[0]?.picture} /></div>
         <div>{player[0]?.profile?.roles}</div>
         <div>{player[0]?.profile?.name}</div>
         <input className="m-2" type='number' value={initialValue} onChange={(e) => bidValueChange(e)} />
         <button className="btn btn-outline-danger" onClick={() => updateBid(player[0]?.category)}> + </button>

         <p className="ml-1">{selectedTeam && (<div>Last Bid by: {selectedTeam}</div>)} <button className="btn btn-lg btn-success btn-block" disabled={playerStatus === 'sold' || selectedTeam === ''} onClick={() => sold(selectedTeam)}>{playerStatus} </button></p>

         <div className="teamArea">
            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
               <div class="btn-group mr-2" role="group" aria-label="First group">
                  {teamList.length && teamList.map(e => (
                     <>
                        <button type="button" className="btn btn-outline-secondary ml-1" disabled={playerStatus === 'Sold'} onClick={() => teamClick(e, player)}>  {e}</button>
                     </>
                  ))}  </div></div>
         </div>
      </div>
   )
}

export default Player;

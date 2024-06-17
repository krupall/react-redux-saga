import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { salePlayer, updateTeamPlayer } from '../redux/playerAction';
import { useEffect, useState } from "react";
import './player.scss';

function Player() {

   const userID = useParams('id').id;
   const chitNumber = useParams('id').number;
   const dispatch = useDispatch();
   let data = useSelector((state) => state.playerData);
   let teamData = useSelector((state) => state.teamData);
   const [selectedTeam, setselectedTeam] = useState('');
   const player = data.filter(e => e.id === userID);
   const url = player[0]?.category === 'Gold' ? '/list/gold' : '/list/silver';
   const [playerStatus, setPlayerStatus] = useState('Sold');
   const [initialValue, setInitialValue] = useState(player[0]?.initialValue || 1000);
   let teamList = useSelector((state) => state.teamData);

   useEffect(() => {
      if (!player[0]?.sold) {
         setPlayerStatus('Sale')
      }
   }, [userID, playerStatus, player])

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
      data.map(e => {
         if (e.id === userID) {
            e.team = selectedTeam;
            e.initialValue = initialValue;
            e.sold = true;
         }
         return true
      })

      return data;
   }

   function updateTeamData() {
    
      // eslint-disable-next-line array-callback-return
      teamData.map((e) => {
         if (e.teamName === selectedTeam) {
            e.totalBuget = e.totalBuget - initialValue;
            e.playerList.push(userID);
           
         }
      })
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
         <div class="row">
            <h2 className="text-left pb-1"> {player[0]?.category} Player {chitNumber}</h2>
            <p><Link to='/'>Home</Link> &gt; <Link to={url}>{player[0]?.category}  Player Overview</Link> &gt; <span>Player Details</span></p>
            <div className="row">
               <div className="col-2 text-center  ">
                  <div className="user-detail  pb-3">
                     <img alt="Profile pic" className="p-3 pb-1" src={player[0]?.picture} />
                     <div className="pt-1">{player[0]?.profile?.name}</div>
                     <div>{player[0]?.profile?.dob}</div>
                     <div>{player[0]?.profile?.address}</div></div>
               </div>
               <div className="col-4 text-center pl-0 ml-0 "> <h4 className="roles"> {player[0]?.roles}</h4><h1>{initialValue}</h1>
                  <input className="m-2" type='number' disabled={playerStatus === 'Sold'} value={initialValue} onChange={(e) => bidValueChange(e)} />
                  <button className="btn btn-outline-danger" disabled={playerStatus === 'Sold'} onClick={() => updateBid(player[0]?.category)}> + </button>
               </div>
               <div className="col-6 achievements "><h3 className="achievements float-left"> Top Achievements</h3> <p>{player[0]?.profile?.about}</p></div>
               <p className="m-1">{selectedTeam && playerStatus !== 'Sold' && (<div>Last Bid by: {selectedTeam}</div>)} <button className="btn btn-lg btn-success btn-block m-3" disabled={playerStatus === 'sold' || selectedTeam === ''} onClick={() => sold(selectedTeam)}>{playerStatus} </button></p>

               {/* Action */}

               {/* Sold */}
               <p className="m-2">{playerStatus === 'Sold' && <span>Sold to <b>{player[0]?.team}</b> in <b>{player[0]?.initialValue}</b> Points</span>}</p>

               {/* Teams */}

               <div className="section teamArea" >
                  <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                     <div class="btn-group mr-2" role="group" aria-label="First group" style={{ display: 'flex', width: '100%' }}>
                        {teamList.length && teamList.map(e => (
                           <>
                              <button type="button" className="btn btn-outline-secondary ml-1" disabled={playerStatus === 'Sold'} onClick={() => teamClick(e.teamName, player)}>  {e.teamName}</button><hr></hr>
                           </>
                        ))}  </div></div>
               </div>
            </div></div></div>
   )
}

export default Player;

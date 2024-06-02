import { useSelector } from "react-redux";

import { useDispatch } from 'react-redux'
import { useEffect } from 'react';

import { teamlist } from '../redux/playerAction';

function TeamSummary() {
  const dispatch = useDispatch()
  let teamList = useSelector((state)=>state.teamData);
  useEffect(()=>{
    dispatch(teamlist())
   },[])

   const openModel = (teamName) => {
    const getPlayerList = teamList.filter(e => e.teamName === teamName)[0];
    console.log(getPlayerList);
   }
  return (
    <div className="teamSummary">
      <h3>Team Purse Summary</h3>
      <br></br>

        {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
        {teamList.length && teamList.map(e =>(
          <div className="card team-card m-2">
        <div className="card-body">
        <h5 className="card-title">{e.teamName}</h5>
        <p className="card-text">Sample Text.</p>
        <a onClick={()=> openModel(e.teamName)} className="btn btn-primary">
          Players
        </a>
      </div></div>
      ))}
    </div>
  );
}

export default TeamSummary;

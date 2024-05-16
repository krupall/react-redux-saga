import { useSelector } from "react-redux";

import { useDispatch } from 'react-redux'
import { useEffect } from 'react';

function TeamSummary() {
  const dispatch = useDispatch()
  const teamList = useSelector((state)=>state.teamData);
  useEffect(()=>{
    dispatch(teamList())
   },[])
  return (
    <div className="teamSummary">
      <h3>Team Purse Summary</h3>
      <br></br>

 
      
        {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
        {teamList.map(e =>(
          <div className="card team-card m-2">
        <div className="card-body">
        <h5 className="card-title">{e}</h5>
        <p className="card-text">Sample Text.</p>
        <a href="#" className="btn btn-primary">
          Players
        </a>
      </div></div>
      ))}
    </div>
  );
}

export default TeamSummary;

import { useSelector } from "react-redux";

import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';

import { teamlist } from '../redux/playerAction';


function TeamSummary() {
  const dispatch = useDispatch();
  const [modalTriggered, setModalTriggered] = useState(false);
  const [teamDetail, setteamDetail] = useState();

  const handleModalTrigger = () => setModalTriggered(!modalTriggered);
  let teamList = useSelector((state) => state.teamData);
  let playerList = useSelector((state) => state.playerData);
  useEffect(() => {
    dispatch(teamlist())
  }, [playerList])

  const openModel = (teamName) => {
    handleModalTrigger();
    const getPlayerList = teamList.filter(e => e.teamName === teamName)[0];
    setteamDetail(getPlayerList);
  }

  const getPlayerList = (list) => {
    const players = playerList?.filter(e => list?.includes(e.id))
    return ( players.length > 0? players.map(e => <p>{e.profile.name}</p>) : 'No Players Selected');
  }

  return (<>
    <div className="teamSummary">
      <h3>Team Purse Summary</h3>
      <br></br>

      {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
      {teamList.length && teamList.map(e => (
        <div className="card team-card m-2">
          <div className="card-body">
            <h5 className="card-title">{e.teamName}</h5>
            <p className="card-text">{e.desc}</p>
            <p className="card-text">Available Budget: {e.totalBuget}</p>
            <a onClick={() => openModel(e.teamName)} className="btn btn-primary">
              Players
            </a>
          </div></div>
      ))}
    </div>
    <div className="bootstrap-model">
    
      <div>
        <div className="modal" style={{ display: modalTriggered ? 'block' : 'none', background: '#00000047' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{teamDetail?.teamName}</h5>
                <button type="button" className="btn-close" onClick={handleModalTrigger}></button>
              </div>
              <div className="modal-body">
              
                <p> PlayerList: { getPlayerList(teamDetail?.playerList)}</p>
           
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={handleModalTrigger}
                >
                  Close
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
}

export default TeamSummary;

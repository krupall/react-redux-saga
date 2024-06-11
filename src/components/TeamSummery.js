import { useSelector } from "react-redux";

import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';

import { teamlist } from '../redux/playerAction';

function TeamSummary() {
  const dispatch = useDispatch();
  const [modalTriggered, setModalTriggered] = useState(true);

  const handleModalTrigger = () => setModalTriggered(!modalTriggered);
  let teamList = useSelector((state) => state.teamData);
  useEffect(() => {
    dispatch(teamlist())
  }, [])

  const openModel = (teamName) => {
    const getPlayerList = teamList.filter(e => e.teamName === teamName)[0];
    console.log(getPlayerList);
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
            <p className="card-text">Sample Text.</p>
            <a onClick={() => openModel(e.teamName)} className="btn btn-primary">
              Players
            </a>
          </div></div>
      ))}
    </div>
    <div className="bootstrap-model">
    <button
        onClick={handleModalTrigger}
        aria-expanded={!modalTriggered ? true : false}
        className="btn btn-primary"
      >
        Trigger modal
      </button>

      <div>
      <div style={{ display: modalTriggered ? 'block' : 'none' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="btn-close"></button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
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

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import { playerlist, teamlist } from '../redux/playerAction';
import { Link } from 'react-router-dom'

function Main() {
  const dispatch = useDispatch();
  let playerData = useSelector((state) => state.playerData);
  let teamData = useSelector((state) => state.teamData);
  console.warn("playerData in main component", playerData);
  console.warn("teamData in main component", teamData);
  const goldPlayers = playerData?.filter(e => e.category === 'Gold');
  const silverPlayers = playerData?.filter(e => e.category === 'Silver');

  useEffect(() => {
    dispatch(playerlist())
    dispatch(teamlist())
  }, [dispatch])

  return (
    <div className='container row'>
      <div>
        {/* <button onClick={() => dispatch(emptyCart())}>Empty Cart</button> */}
      </div>
      <div className='header-detail row'>
        <h2>Auction Overview</h2>
        <div className='detail mt-3 row'>
          <div className='total col-2'><span className='totalNumber'>{playerData.length}</span><p>Registrations</p></div>
          <div className='category col'>
            <span className='counter'>{goldPlayers.length}<Link to='/list/gold'>GOLD PLAYER</Link> <span className='symbol'>&gt;</span></span>
            <span className='counter'>{goldPlayers.filter(e => e.sold === true).length} <br></br> SOLD </span>
            <span className='counter'>{goldPlayers.filter(e => e.sold === false).length}<br></br>UNSOLD</span>
          </div>
          <div className='category col'>
            <span className='counter'>{silverPlayers.length}<Link to='/list/silver'>SILVER PLAYER</Link> <span className='symbol'>&gt;</span></span>
            <span className='counter'>{silverPlayers.filter(e => e.sold === true).length} <br></br> SOLD </span>
            <span className='counter'>{silverPlayers.filter(e => e.sold === false).length}<br></br>UNSOLD</span>
          </div>
        </div>
      </div>
      <div className='row'>Total Teams : {teamData?.length}</div>
      {/* <TeamSummary></TeamSummary> */}

      {/* Player List*/}
      <div className='product-container'>
        {
          playerData.map((item) => <div className='product-item'>
            <img src={item.picture} alt="" />
            <div className='name'> {item.profile.name} </div>
            <div>Category : {item.category} </div>
            <div>Role : {item.roles} </div>
            <div>
              {/* <button onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
              <button onClick={() => dispatch(removeToCart(item.id))}>Remove to Cart</button> */}

            </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default Main;

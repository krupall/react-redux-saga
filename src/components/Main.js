import { addToCart, emptyCart, removeToCart } from '../redux/action';
import { useDispatch } from 'react-redux'
import { productList } from '../redux/productAction';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';
import { playerlist, teamlist } from '../redux/playerAction';
import TeamSummary from './TeamSummery';
import { Link } from 'react-router-dom'

function Main() {
  const dispatch = useDispatch();
  let playerData = useSelector((state)=>state.playerData);
  let teamData = useSelector((state)=>state.teamData);
  console.warn("playerData in main component", playerData);
  console.warn("teamData in main component", teamData);
  const goldPlayers = playerData?.filter(e => e.category === 'Gold');
  const silverPlayers = playerData?.filter(e => e.category === 'Silver');
  
  useEffect(()=>{
   dispatch(playerlist())
   dispatch(teamlist())
  },[])
  
  return (
    <div>
      <div>
      {/* <button onClick={() => dispatch(emptyCart())}>Empty Cart</button> */}
      </div>
      <div className='header-detail'>
        <h2>Auction Overview</h2>
        <div className='detail'>
      <div className='total'><span className='totalNumber'>{playerData.length}</span><p>Registrations</p></div>
      <div className='category'>
       <Link to='/list/gold'>GOLD PLAYER</Link>  : {goldPlayers.length}
        SOLD: {goldPlayers.filter(e => e.sold === true).length}
        UNSOLD: {goldPlayers.filter(e => e.sold === false).length}
      </div>
      <div className='category'>
      <Link to='/list/silver'> SILVER PLAYER</Link> : {silverPlayers.length}
        SOLD: {silverPlayers.filter(e => e.sold === true).length}
        UNSOLD: {silverPlayers.filter(e => e.sold === false).length}
      </div>
      </div>
      </div>
      <div>Total Teams : {teamData?.length}</div>
      <TeamSummary></TeamSummary>
      <div className='product-container'>
        {
          playerData.map((item)=><div className='product-item'>
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

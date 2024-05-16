import { addToCart, emptyCart, removeToCart } from '../redux/action';
import { useDispatch } from 'react-redux'
import { productList } from '../redux/productAction';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';
import { playerlist, teamlist } from '../redux/playerAction';

function Main() {
  const dispatch = useDispatch();
  let playerData = useSelector((state)=>state.playerData);
  let teamData = useSelector((state)=>state.teamData);
  console.warn("playerData in main component", playerData);
  console.warn("teamData in main component", teamData);
  
  useEffect(()=>{
   dispatch(playerlist())
   dispatch(teamlist())
  },[])
  
  return (
    <div>
      <div>
      {/* <button onClick={() => dispatch(emptyCart())}>Empty Cart</button> */}
      </div>
      <div>Total Player : {playerData.length}</div>
      <div>Total Teams : {teamData?.length}</div>
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

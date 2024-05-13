import { addToCart, emptyCart, removeToCart } from '../redux/action';
import { useDispatch } from 'react-redux'
import { productList } from '../redux/productAction';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';
import { playerlist } from '../redux/playerAction';

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state)=>state.playerData);
  console.warn("data in main component", data);
  
  useEffect(()=>{
    dispatch(playerlist())
  },[])
  return (
    <div>
      <div>
      {/* <button onClick={() => dispatch(emptyCart())}>Empty Cart</button> */}
      </div>
      <div className='product-container'>
        {
          data.map((item)=><div className='product-item'>
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

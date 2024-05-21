
import {useSelector} from 'react-redux'

import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { playerlist } from '../redux/playerAction';
import { Link } from 'react-router-dom';


function List() {
    const dispatch = useDispatch();
    const category = useParams('category').category;
    alert(category)
    const playerData = useSelector((state)=>state.playerData)
    const [listData, setlistData] = useState(playerData);
    
  
  const callClick= (event) => {
    if(event.currentTarget.checked === true){
      setlistData(listData.filter(e => e.category === 'Gold'))
    } else {
      setlistData(playerData)
    }
  }

  useEffect(() => {
    if(category === 'gold'){
      setlistData(listData.filter(e => e.category === 'Gold'))
    } 
    if(category === 'silver'){
      setlistData(listData.filter(e => e.category === 'Silver'))
    }
    setlistData(playerData)
  },[category])
   
      return ( <div>
         {/* <input type='checkbox' checked={category === 'gold'} onClick={(e) =>callClick(e)}  /> {category === 'gold' ? 'Golden Players' :'Silver Players'} */}
        <div className='square'>{
       
       listData.map((element, index) => {
            let url = `/player/`+element.id;
            return  <Link to={url}>{index + 1}</Link>})}</div>  </div> );
}

export default List;

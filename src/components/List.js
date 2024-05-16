
import {useSelector} from 'react-redux'

import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { playerlist } from '../redux/playerAction';
import { Link } from 'react-router-dom';


function List() {
    const dispatch = useDispatch();
    const playerData = useSelector((state)=>state.playerData)
    const [listData, setlistData] = useState(playerData);
    
    
    console.log(listData);
  const callClick= (event) => {
    if(event.currentTarget.checked === true){
      setlistData(listData.filter(e => e.category === 'Gold'))
    } else {
      setlistData(playerData)
    }
  }
   
      return ( <div>
         <input type='checkbox' onClick={(e) =>callClick(e)}  /> Golden Players
        <div className='square'>{
       
       listData.map((element, index) => {
            let url = `/player/`+element.id;
            return  <Link to={url}>{index + 1}</Link>})}</div>  </div> );
}

export default List;

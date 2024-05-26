
import {useSelector} from 'react-redux'

import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { playerlist } from '../redux/playerAction';
import { Link } from 'react-router-dom';
import './list.scss'


function List() {
    const dispatch = useDispatch();
    const category = useParams('category').category;
    const playerData = useSelector((state)=>state.playerData)
    const [listData, setlistData] = useState(playerData);
    
  
  const callClick= (event, category) => {
    if(event.currentTarget.checked === true){
      setlistData(listData.filter(e => e.category === category))
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
    if(category === 'all'){
      setlistData(playerData)
    }
  },[category])
   
      return ( <div>
        <div className='categoryCheckboxGroup'>
          <input type='checkbox' className='p-3' onClick={(e) =>callClick(e ,'Gold')}  /> Gold Players
          <input type='checkbox'  className='m-2' onClick={(e) =>callClick(e, 'Silver')}  /> Silver Players</div>
        <div className='square'>{
       
       listData.map((element, index) => {
            let url = `/player/`+element.id;
            return  <Link to={url}>{index + 1}</Link>})}</div>  </div> );
}

export default List;

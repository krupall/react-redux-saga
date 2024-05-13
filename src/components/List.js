
import {useSelector} from 'react-redux'

import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { playerlist } from '../redux/playerAction';
import { Link } from 'react-router-dom';


function List() {
    const dispatch = useDispatch();
    let data = useSelector((state)=>state.playerData);
    
    console.log(data);

   
      return ( <div className='square'>{
        data.map((element, index) => {
            let url = `/player/`+element.id;
            return  <Link to={url}>{index + 1}</Link>})}</div>  );
}

export default List;
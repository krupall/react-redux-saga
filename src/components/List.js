/* eslint-disable react-hooks/exhaustive-deps */

import {useSelector} from 'react-redux'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './list.scss'


function List() {
    const category = useParams('category').category;
    const playerData = useSelector((state)=>state.playerData)
    const [checkGoldcheckbox, setCheckGoldcheckbox] = useState(false)
    const [soldPlayer, setSoldPlayer] = useState(0);
    const [unsoldPlayer, setunSoldPlayer] = useState(0);
    const [checkSilvercheckbox, setCheckSilvercheckbox] = useState(false)
    const [listData, setlistData] = useState(playerData);
    
  
  const callClick= (event, category) => {
    if(event.currentTarget.checked === true){
      if(category === 'Gold'){
        setCheckGoldcheckbox(true)
      }
      if(category === 'Silver'){
        setCheckSilvercheckbox(true)
      }
      setlistData(listData.filter(e => e.category === category))
      countSoldPlayers(listData.filter(e => e.category === category))
    } else {
      setCheckGoldcheckbox(false)
      setCheckSilvercheckbox(false);
      setlistData(playerData)
      countSoldPlayers(playerData)
    }
  }

  const countSoldPlayers = (data) => {
    let counter = 0;
    counter = data.filter(e => e.sold === true);
    setSoldPlayer(counter.length);
    setunSoldPlayer(data.length - counter.length);
  }

  useEffect(() => {
    if(category === 'gold'){
      setCheckGoldcheckbox(true);
      setlistData(listData.filter(e => e.category === 'Gold'))
      countSoldPlayers(listData)
    } 
    if(category === 'silver'){
      setCheckSilvercheckbox(true);
      setlistData(listData.filter(e => e.category === 'Silver'))
      countSoldPlayers(listData)
    }
    if(category === 'all'){
      setlistData(playerData)
      countSoldPlayers(playerData)
      setCheckGoldcheckbox(false)
      setCheckSilvercheckbox(false);
    }
  },[category])
   
      return ( <div className='row list-view'>
        <div className='categoryCheckboxGroup '>
          <input type='checkbox' className='p-3' checked={checkGoldcheckbox} onClick={(e) =>callClick(e ,'Gold')}  /> Gold Players
          <input type='checkbox'  className='m-2' checked={checkSilvercheckbox} onClick={(e) =>callClick(e, 'Silver')}  /> Silver Players
          &nbsp;<span>Sold: {soldPlayer}</span>
          &nbsp;<span>UnSold: {unsoldPlayer}</span>
          </div>
         
        <div className='square'>{
       
       listData.map((element, index) => {
            let chitNumber = index+1;
            let url = `/player/`+element.id+'/'+chitNumber;
            let checkClassname = 'not-sold';
            if(element.sold){
              checkClassname ='sold';
            }
            return  <Link to={url} className={checkClassname}>{index + 1}</Link>})}</div>  </div> );
}

export default List;

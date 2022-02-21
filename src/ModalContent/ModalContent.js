import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Card from '../Components/Card/Card'
import style from './ModalContent.module.css'
import {getChannels} from '../actions/index'

function ModalContent() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getChannels())
  }, [dispatch])


  const channels = useSelector((state) => state.channels.channels)
  const allDataChannels = channels.response?.channels
  return (
    <div className={style.wrappModalContent}>
        <div className={style.wrapInfoContent}></div>
        <div className={style.wrapChannelContent}>
            <div className={style.wrapImgInfo}>
                {
                  allDataChannels?.map(ch => {
                    return(
                      <Card img={ch.image} num={ch.number} info={ch.events}/>
                    )
                  })
                }
                
            </div>
            
        </div>
    </div>
  )
}

export default ModalContent
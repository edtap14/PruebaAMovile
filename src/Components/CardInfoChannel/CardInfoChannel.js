import React from 'react'
import style from './CardInfoChannel.module.css'
import {useDispatch} from 'react-redux'

function CardInfoChannel({dateBegin, dateEnd, name, duration}) {

  const dispatch = useDispatch()

  const hourInit = dateBegin.split(' ')[1].split(':')[0]
  const minutsInit = dateBegin.split(' ')[1].split(':')[2]
  const hourEnd = dateEnd.split(' ')[1].split(':')[0]
  const minutsEnd = dateEnd.split(' ')[1].split(':')[2]

  const widthBox = Number(duration.split(':')[0]) * 500

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(name)
  }
 
  
  return (
    <button onClick={onSubmit}   className={style.boxChannelInfo} style={{width: widthBox}}>
      <p>{name}</p>
      <span>{hourInit}:{minutsInit}</span>
      <span> - {hourEnd}:{minutsEnd}</span>
    </button>
  )
}

export default CardInfoChannel
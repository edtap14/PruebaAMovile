import React from 'react'
import CardInfoChannel from '../CardInfoChannel/CardInfoChannel'
import style from './Card.module.css'

function Card({img, num, info}) {
 
  return (
    <div className={style.wrappCard}>
        <div className={style.boxChannel}>
          <p>{num}</p>
          <img className={style.img} src={img} alt='logo'/>
        </div>
        <div className={style.boxChannelInfo}>
          {
            info?.map(e => {
              return(
                <CardInfoChannel name={e.name} dateBegin={e.date_begin} dateEnd={e.date_end} duration={e.duration }/>
              )
            })
          }
            
        </div>
    </div>
  )
}

export default Card
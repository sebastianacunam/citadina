import React from 'react'
import ws from '../../utils/whatsapp.png'
import s from '../WsIcon/WsIcon.module.css'


export default function WsIcon() {
  return (
    <a href="https://api.whatsapp.com/send?phone=351152788446" target="_blank" rel="noopener noreferrer" className={s.wsicon}>
        <img className={s.wsImg} src={ws} alt="imt not found"/>
    </a>
  )
}

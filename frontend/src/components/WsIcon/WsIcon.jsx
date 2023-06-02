import React from 'react'
import ws from '../../utils/whatsapp.png'
import s from '../WsIcon/WsIcon.module.css'


export default function WsIcon() {
  return (
    <a href="https://api.whatsapp.com/send?phone=91127338725" target="_blank" rel="noopener noreferrer" className={s.wsicon}>
        <img src={ws} alt="imt not found" height="75px"/>
    </a>
  )
}

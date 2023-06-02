import React from 'react'
import s from '../Footer/Footer.module.css'

export default function Footer() {
  return (
    <div className={s.container}>
        <div className={s.socialmedia}>
            <p className={s.iconos}><a href="https://www.instagram.com/citadina.alojamiento/" target="_blank">instagram</a></p>
            <p className={s.iconos}>facebook</p>
            <p className={s.iconos}>whatsapp</p>
        </div>
        <div className={s.derechos}>
            <p>Todos los derechos reservados. Página web hecha por <a href="https://sebastianacunam.com" target="_blank">@sebastianacunam </a> </p>
        </div>
    </div>
  )
}

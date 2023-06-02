import React from 'react'
import s from '../Footer/Footer.module.css'
import instagram from '../../utils/instagram.png'
import facebook from '../../utils/facebook.png'
import whatsapp from '../../utils/whatsapp2.png'


export default function Footer() {
  return (
    <div className={s.container}>
        <div className={s.socialmedia}>
            <p className={s.iconos}><a href="https://www.instagram.com/citadina.alojamiento/" target="_blank"><img className={s.icon} src={instagram} alt="img not found"/></a></p>
            <p className={s.iconos}><a href="https://www.facebook.com/Citadinaalojamientotemporario?mibextid=LQQJ4d" target="_blank"><img className={s.icon} src={facebook} alt="img not found"/></a></p>
            <p className={s.iconos}><a href="https://api.whatsapp.com/send?phone=91127338725" target="_blank"><img className={s.icon} src={whatsapp} alt="img not found"/></a></p>
        </div>
        <div className={s.derechos}>
            <p>Todos los derechos reservados. Página web hecha por <a href="https://sebastianacunam.com" target="_blank">@sebastianacunam </a> </p>
        </div>
    </div>
  )
}

import React from 'react'
import s from '../Footer/Footer.module.css'
import instagram from '../../utils/instagram.png'
import facebook from '../../utils/facebook.png'
import whatsapp from '../../utils/whatsapp2.png'
import mail from '../../utils/mail.png'
import location from '../../utils/location.png'



export default function Footer() {
  return (
    <div className={s.container}>
        <div className={s.socialmedia}>
            <p className={s.iconos}><a href='mailto:alojamiento.citadina@gmail.com'><img className={s.iconmail} src={mail} alt='img not found'/></a></p>
            <p className={s.iconos}><a href='https://www.instagram.com/citadina.alojamiento/' target='_blank'><img className={s.icon} src={instagram} alt='img not found'/></a></p>
            <p className={s.iconos}><a href='https://www.facebook.com/Citadinaalojamientotemporario?mibextid=LQQJ4d' target='_blank'><img className={s.icon} src={facebook} alt='img not found'/></a></p>
            <p className={s.iconos}><a href='https://api.whatsapp.com/send?phone=351152788446' target='_blank'><img className={s.icon} src={whatsapp} alt='img not found'/></a></p>
            <p className={s.iconos}><a href='https://maps.app.goo.gl/t7ZyspZcTv6Wxtd99?g_st=iw' target='_blank'><img className={s.icon} src={location} alt='img not found'/></a></p>
        </div>
        <div className={s.derechos}>
            <p>Todos los derechos reservados. Página web hecha por <a href="https://sebastianacunam.com" target="_blank">@sebastianacunam </a> </p>
        </div>
    </div>
  )
}

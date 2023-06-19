import React from 'react'
import Footer from '../Footer/Footer'
import WsIcon from '../WsIcon/WsIcon'
import Menu from '../Menu/Menu'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import s from '../Pileta/Pileta.module.css'
import image1 from '../../utils/IMG_0774.png'
import image3 from '../../utils/IMG_0776.png'
import image4 from '../../utils/IMG_0778.png'
import image5 from '../../utils/IMG_0775.png'
import image6 from '../../utils/piletahorizontal.jpg'

export default function Pileta() {
    return (
        <div>
            <Menu/>
            <div className={s.h}>
              <section className={s.hleft}>
                  <img className={s.img} src={image1} alt="" />
              </section>
              <section className={s.hright}>
                  <div className={s.texto}>
                    <h1 className={s.letrash1}>PILETA</h1>
                    <p className={s.letrasp}>El edificio cuenta con una pileta en el 8vo piso, la misma tiene solárium y reposeras decorada con un hermoso jardín vertical.</p>
                    {/* <p className={s.letrasp}>La habitación cuenta con Tv por cable y App de Netflix; aire acondicionador frío/calor y amplio placard </p> */}
                  </div>
              </section>
            </div>        
    
            <div className={s.contiene}>
                <h4 className={s.subtitle}>Galería</h4>
                <section className={s.section1}>
                    <img className={s.styleImg4} src={image6} alt="img not found" />
                    <img className={s.styleImg1} src={image3} alt="img not found" />
                    <img className={s.styleImg2} src={image4} alt="img not found" />
                    <img className={s.styleImg3} src={image5} alt="img not found" />
                </section>

            </div>
            <div className={s.divBtn}>
            <a href='/#servicios'>
                <div className={s.btnHome}>Volver a página de inicio</div>
            </a>
        </div>
            <Footer/>
            <WsIcon/>
        </div>
      )
}

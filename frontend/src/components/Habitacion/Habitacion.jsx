import React from 'react'
import Menu from '../Menu/Menu'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import image1 from '../../utils/IMG_0628.png'
import image2 from '../../utils/IMG_0592.png'
import image3 from '../../utils/IMG_0588.png'
import image4 from '../../utils/IMG_0593.png'
import image5 from '../../utils/IMG_0598.png'
import image6 from '../../utils/IMG_0600.png'
import image7 from '../../utils/IMG_0632.png'
import image8 from '../../utils/IMG_0631.png'
import image9 from '../../utils/IMG_0633.png'
import image10 from '../../utils/IMG_0641.png'
import s from '../Habitacion/Habitacion.module.css'
import Footer from '../Footer/Footer'
import WsIcon from '../WsIcon/WsIcon'

export default function Habitacion() {
  return (
    <div>
        <Menu/>
        <div className={s.h}>
          <section className={s.hleft}>
              <img className={s.img} src={image1} alt="" />
          </section>
          <section className={s.hright}>
              <div className={s.texto}>
                <h1 className={s.letrash1}>HABITACIÓN</h1>
                <p className={s.letrasp}>Nuestro departamento te ofrece una primera habitación con una cama Queen (colchón de alta densidad).</p>
                <p className={s.letrasp}>La habitación cuenta con Tv por cable y App de Netflix; aire acondicionador frío/calor y amplio placard </p>
              </div>
          </section>
        </div>        

        <div className={s.hdos}>
          <section className={s.hright}>
              <div className={s.texto}>
                <h1 className={s.letrash1}>HABITACIÓN</h1>
                <p className={s.letrasp}>La propiedad cuenta con una segunda habitación que dispone de 2 camas individuales de 2 mts de largo o una cama King. </p>
                <p className={s.letrasp}>También cuenta con Tv por cable y App de Netflix; aire acondicionador frío/calor y amplio placard </p>
              </div>
          </section>
          <section className={s.hleft}>
              <img className={s.img} src={image2} alt="" />
          </section>
        </div>

        <div className={s.contiene}>
            <h4 className={s.subtitle}>Primera habitación</h4>
            <section className={s.section1}>
                <img className={s.styleImg4} src={image6} alt="img not found" />
                <img className={s.styleImg1} src={image3} alt="img not found" />
                <img className={s.styleImg2} src={image4} alt="img not found" />
                <img className={s.styleImg3} src={image5} alt="img not found" />
            </section>

            <h4 className={s.subtitle}>Segunda habitación</h4>
            <section className={s.section2}>
                <img className={s.styleImg5} src={image7} alt="img not found" />
                <img className={s.styleImg6} src={image8} alt="img not found" />
                <img className={s.styleImg7} src={image9} alt="img not found" />
                <img className={s.styleImg8} src={image10} alt="img not found" />
            </section>
        </div>
        <div className={s.btnHome}>
            <Link to='/'>
                <button>Volver a página de inicio</button>
            </Link>
        </div>
        <Footer/>
        <WsIcon/>
    </div>
  )
}

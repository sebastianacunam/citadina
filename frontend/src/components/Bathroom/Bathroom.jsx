import React from 'react'
import Menu from '../Menu/Menu'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import image1 from '../../utils/IMG_0658.png'
import image2 from '../../utils/IMG_0657.png'
import image3 from '../../utils/IMG_0646.png'
import image4 from '../../utils/IMG_0651.png'
import image5 from '../../utils/IMG_0647.png'
import image6 from '../../utils/IMG_0650.png'
import s from '../Bathroom/Bathroom.module.css'
import Footer from '../Footer/Footer'
import WsIcon from '../WsIcon/WsIcon'

export default function Bathroom() {
  return (
    <div>
        <Menu/>
        <div className={s.h}>
          <section className={s.hleft}>
              <img className={s.img} src={image1} alt="" />
          </section>
          <section className={s.hright}>
              <div className={s.texto}>
                <h1 className={s.letrash1}>BAÑO</h1>
                <p className={s.letrasp}>El toilette es el primer sanitario visible en el departamento. Es muy amplio y con buena luminación. Cuenta con lavamanos, inodoro y bidet. Posee un espejo de pared a pared lo cual da la sensación de mayor amplitud e iluminación.</p>
              </div>
          </section>
        </div>        

        <div className={s.hdos}>
          <section className={s.hright}>
              <div className={s.texto}>
                <h1 className={s.letrash1}>BAÑO</h1>
                <p className={s.letrasp}>El baño completo es el que se ubica más próximo a las dos habitaciones. Está equipado con lavamanos, inodoro, bidet y bañera con mampara corrediza. Esta última tiene ducha demontable para más confort a la hora de su baño.</p>
                <p className={s.letrasp}>También tiene grandes espacios de guardado. Por supuesto, recibimos a los huespedes con elementos de tocador para toda su estadía, repuesto de papel higiénico y secador de pelo.</p>
              </div>
          </section>
          <section className={s.hleft}>
              <img className={s.img} src={image2} alt="" />
          </section>
        </div>

        <div className={s.contiene}>
            <h4 className={s.subtitle}>Baño</h4>
            <section className={s.section1}>
                <img className={s.styleImg4} src={image6} alt="img not found" />
                <img className={s.styleImg1} src={image3} alt="img not found" />
                <img className={s.styleImg2} src={image4} alt="img not found" />
                <img className={s.styleImg3} src={image5} alt="img not found" />
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

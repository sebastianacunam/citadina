import React from 'react';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import WsIcon from '../WsIcon/WsIcon';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import s from '../Gym/Gym.module.css';
import image1 from '../../utils/image00046.jpeg'
import image2 from '../../utils/IMG_0755.png'
import image3 from '../../utils/IMG_0756.png'
import image4 from '../../utils/IMG_0758.png'
// import image5 from '../../utils/IMG_0647.png'
// import image6 from '../../utils/IMG_0650.png'

export default function Gym() {
    return (
        <div>
            <Menu/>
            <div className={s.h}>
              <section className={s.hleft}>
                  <img className={s.img1} src={image1} alt="" />
              </section>
              <section className={s.hright}>
                  <div className={s.texto}>
                    <h1 className={s.letrash1}>GIMNASIO</h1>
                    <p className={s.letrasp}>En la terraza se encuentra el gimnasio. este cuenta con bicicleta, máquina elíptica, banco inclinado, pelota de yoga, mancuernas, etc. </p>
                  </div>
              </section>
            </div>        
    
            <div className={s.hdos}>
              <section className={s.hright}>
                  <div className={s.texto}>
                    <h1 className={s.letrash1}>GIMNASIO</h1>
                    <p className={s.letrasp}>Para mayor confort también posee aire acondicionado y amplios ventanales.</p>
                 
                  </div>
              </section>
              <section className={s.hleft}>
                  <img className={s.img} src={image2} alt="" />
              </section>
            </div>
    
            <div className={s.contiene}>
                <h4 className={s.subtitle}>Gimnasio</h4>
                <section className={s.section1}>
                    {/* <img className={s.styleImg4} src={image6} alt="img not found" /> */}
                    <img className={s.styleImg1} src={image3} alt="img not found" />
                    <img className={s.styleImg2} src={image4} alt="img not found" />
                    {/* <img className={s.styleImg3} src={image5} alt="img not found" /> */}
                </section>
    
            </div>
            <div className={s.btnHome}>
              <a href='/#servicios'>
                  <button>Volver a página de inicio</button>
              </a>
            </div>
            <Footer/>
            <WsIcon/>
    </div>
  )
}

import React from 'react';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import WsIcon from '../WsIcon/WsIcon';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import s from '../Otros/Otros.module.css';
import image1 from '../../utils/IMG_0731.png'
import image2 from '../../utils/IMG_0762.png'
import image3 from '../../utils/IMG_0726.png'
import image4 from '../../utils/IMG_0729.png'
import image5 from '../../utils/IMG_0761.png'
import image6 from '../../utils/IMG_0772.png'

export default function Otros() {
    return (
        <div>
            <Menu/>
            <div className={s.h}>
              <section className={s.hleft}>
                  <img className={s.img} src={image1} alt="" />
              </section>
              <section className={s.hright}>
                  <div className={s.texto}>
                    <h1 className={s.letrash1}>ELECTRODOMÉSTICOS</h1>
                    <p className={s.letrasp}>El departamento cuenta con electrodomésticos: microondas, tostadora, pava eléctrica y lavarropas. El uso de este último es para el lavado de ropa personal, no así para ropa blanca. Se ofrece un servicio de limpieza y/o recambio de blancos con costo adicional. </p>
                  </div>
              </section>
            </div>        
    
            <div className={s.hdos}>
              <section className={s.hright}>
                  <div className={s.texto}>
                    <h1 className={s.letrash1}>TERRAZA</h1>
                    <p className={s.letrasp}>En la terraza se puede hacer uso de el Salón de Uso Múltiple. Hasta 4 personas es gratuito, más de 4 personas tiene costo adicional. Está equipado con heladera, vajilla y asadores.</p>
                 
                  </div>
              </section>
              <section className={s.hleft}>
                  <img className={s.img} src={image2} alt="" />
              </section>
            </div>
    
            <div className={s.contiene}>
                <h4 className={s.subtitle}>Galería de fotos</h4>
                <section className={s.section1}>
                    <img className={s.styleImg1} src={image3} alt="img not found" />
                    <img className={s.styleImg2} src={image4} alt="img not found" />
                    <img className={s.styleImg3} src={image5} alt="img not found" />
                    <img className={s.styleImg4} src={image6} alt="img not found" />
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

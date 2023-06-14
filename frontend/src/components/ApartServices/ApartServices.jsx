import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

import s from '../ApartServices/ApartServices.module.css'
import lavarropas from '../../utils/lavarropas.png'
import bano from '../../utils/bano.png'
import cama from '../../utils/cama.png'
import pesas from '../../utils/pesas.png'
import pileta from '../../utils/pileta.png'


export default function ApartServices() {
  return (
    <div className={s.contenedorCompleto} id='servicios'>
        <h1 className={s.titulo}>NUESTROS SERVICIOS</h1>
        <section className={s.contiene}>
           {/* Primer Servicio */}
            <div className={s.cuadro}>
                <img className={s.iconos} src={cama} alt="img not found" />
                <h1>Habitación </h1>
                <p> 
                    2 confortables habitaciones.
                </p>
                    <Link to='/habitacion'>
                        <button className={s.btn}>ver más</button>
                    </Link>    

            </div>            


           {/* Segundo Servicio */}
            <div className={s.cuadro}>
                <img className={s.iconos} src={bano} alt="img not found" />
                <h1>Baño </h1>
                <p>1 baño completo y 1 toilette.</p>
                    <Link to='/baño'>
                        <button className={s.btn}>ver más</button>
                    </Link>
            </div>            


           {/* Tercer Servicio */}
            <div className={s.cuadro}>
                <img className={s.iconos} src={pileta} alt="img not found" />
                <h1>Pileta </h1>
                <p>Piscina “infinita” en terraza.<br/></p>
                    <Link to='/pileta'>
                        <button className={s.btn}>ver más</button>
                    </Link>
            </div>     


           {/* Cuarto Servicio */}
            <div className={s.cuadro}>
                <img className={s.iconos} src={pesas} alt="img not found" />
                <h1>Gimnasio </h1>
                <p>Gimnasio equipado.</p>
                    <Link to='/gimnasio'>
                        <button className={s.btn}>ver más</button>
                    </Link>
            </div>            

            
           {/* Quinto Servicio */}
            <div className={s.cuadro}>
                <img className={s.iconos} src={lavarropas} alt="img not found" />
                <h1>Otros... </h1>
                <p>Equipamento adicional del departamento.</p>
                    <Link to='/otros'>
                        <button className={s.btn}>ver más</button>
                    </Link>
            </div>            
        </section>
    </div>
  )
}

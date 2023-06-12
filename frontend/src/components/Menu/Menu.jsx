import s from '../Menu/Menu.module.css'
import logo from '../../utils/logosinfondo.png'


export default function Menu (){
    return(
        <div className={s.menuContainer}>
            <div className={s.bgMenu}>
                <div className={s.logoMenu}>
                    {/* <h3 >logo</h3>     */}
                    <img className={s.logo} src={logo} alt="img not found" />
                </div>
                {/*////////////////*/}
                <nav className={s.navMenu}>
                    <div>
                        <ul>
                            <li>
                                <a href='/'>Inicio</a>
                            </li>
                            
                            <li>
                                <a href='/#servicios'>
                                    Servicios
                                </a>
                            </li>
                            
                            <li>
                                <a href='/#contacto'>
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}
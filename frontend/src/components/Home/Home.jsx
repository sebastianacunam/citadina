//Components
import Menu from '../Menu/Menu'
import ApartamentStyle from '../ApartamentStyle/ApartamentStyle'
import ApartServices from '../ApartServices/ApartServices'
import Gallery from '../Gallery/Gallery'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import WsIcon from '../WsIcon/WsIcon'
import Premium from '../Premium/Premium'

//Images n' css
import image from '../../utils/livingroom.png'

import s from '../Home/Home.module.css'

//Component
export default function Home (){
    return (
        <div className={s.background}>
            <Menu/>
            <section className={s.firstpart}>
                <img className={s.image} src={image} alt="img not found" />
                <div className={s.introinfo}>
                    <h2 >El confort que buscas...</h2>                    
                </div>
            </section>
            <ApartamentStyle/>
            <ApartServices/>
            <Gallery/>
            <Premium/>
            <Contact/>
            <Footer/>
            <WsIcon/>
        </div>
    )
}
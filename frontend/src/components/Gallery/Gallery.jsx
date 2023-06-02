import img1 from '../../utils/img1.png'
import img2 from '../../utils/img2.png'
import img3 from '../../utils/img3.png'
import img4 from '../../utils/img4.png'
import img5 from '../../utils/img5.png'
import img6 from '../../utils/img6.png'
import img7 from '../../utils/img7.png'
import img8 from '../../utils/img8.png'
import s from '../Gallery/Gallery.module.css'

export default function Gallery(){
    return(
        <div className={s.contiene}>
            <h4 className={s.subtitle}>Descubrí nuestro espacio...</h4>
            <section className={s.section1}>
                <img className={s.styleImg1} src={img1} alt="img not found" />
                <img className={s.styleImg2} src={img2} alt="img not found" />
                <img className={s.styleImg3} src={img3} alt="img not found" />
                <img className={s.styleImg4} src={img4} alt="img not found" />
            </section>
            <section className={s.section2}>
                <img className={s.styleImg5} src={img5} alt="img not found" />
                <img className={s.styleImg6} src={img6} alt="img not found" />
                <img className={s.styleImg7} src={img7} alt="img not found" />
                <img className={s.styleImg8} src={img8} alt="img not found" />
            </section>
        </div>
    )
}
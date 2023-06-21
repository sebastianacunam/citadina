import React from 'react'
import image1 from '../../utils/vertical1.jpeg'
import image2 from '../../utils/vertical2.jpeg'
import image3 from '../../utils/vertical3.jpeg'
import image4 from '../../utils/vertical4.jpeg'

import s from '../ApartamentStyle/ApartamentStyle.module.css'

export default function ApartamentStyle() {
  return (
    <div>
        
        <section className={s.contiene}>
            <div><img className={s.image1} src={image1} alt="" /></div>
            <div><img className={s.image2} src={image2} alt="" /></div>
            <div><img className={s.image3} src={image3} alt="" /></div>
            <div><img className={s.image4} src={image4} alt="" /></div>
        </section>
    </div>
  )
}

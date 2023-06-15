import React, {useState, useRef} from 'react'
import s from '../Contact/Contact.module.css'
import emailjs from '@emailjs/browser'

export default function Contact() {

    const formRef = useRef();
    const [done, setDone] = useState(false)

    const [input, setInput] = useState({
        name: "", 
        telefono: "",
        mail: "",
        mensaje: ""
    })

    function handleChange(e){
        setInput({
            ...input, 
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();

        if(input.name && input.telefono && input.mail && input.mensaje){
            emailjs.sendForm('service_sa77uqu', 'template_pcy837p', formRef.current, 'NzGKT9oDPSFX-k57X')
          .then((result) => {
              console.log(result.text);
              setDone(true)
          }, (error) => {
              console.log(error.text);
          });
        } else {
            alert("Hay campos que no están llenos! Por favor, llenalos antes de enviar!")
        }

    }

    return (
        <div id='contacto'>
            <h1 className={s.titulo}>Contactanos</h1>
            <div className={s.container}>
                <form className={s.cform} ref={formRef} onSubmit={(e)=>handleSubmit(e)}>
                    <input className={s.cinput} type="" placeholder='Nombre y apellido' name="name" onChange={(e)=>handleChange(e)} value={input.name}/>                    
                    <input className={s.cinput} type="" placeholder='Teléfono' name="telefono" onChange={(e)=>handleChange(e)} value={input.telefono}/>
                    <input className={s.cinput} type="" placeholder='Correo electrónico' name="mail" onChange={(e)=>handleChange(e)} value={input.mail}/>
                    <textarea className={s.ctextarea} rows="5" placeholder='Mensaje...' name="mensaje" onChange={(e)=>handleChange(e)} value={input.mensaje}></textarea>
                    <button className={s.cbtn}>Enviar</button>
                    {done && <p className='p-submit'>Recibí tu mensaje, nos comunicaremos en la mayor brevedad.</p>}
                </form>
            </div>
        </div>
    )
}

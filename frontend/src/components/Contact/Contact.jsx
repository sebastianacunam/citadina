import React, {useState, useRef} from 'react'
import s from '../Contact/Contact.module.css'
import emailjs from '@emailjs/browser'

export default function Contact() {

    const formRef = useRef();
    const [done, setDone] = useState(false)

    const [input, setInput] = useState({
        user_name: "", 
        user_subject: "",
        user_telefono: "",
        user_email: "",
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

        if(input.user_name && input.user_telefono && input.user_email && input.mensaje && input.user_subject){
            emailjs.sendForm('service_4g3syjj', 'template_aptb5en', formRef.current, 'LRYcNs_ftNzLFFP4y')
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
                    <input className={s.cinput} type='' placeholder='Nombre y apellido' name='user_name' onChange={(e)=>handleChange(e)} value={input.user_name}/>                    
                    <input className={s.cinput} type='' placeholder='Asunto' name='user_subject' onChange={(e)=>handleChange(e)} value={input.user_subject}/>                    
                    <input className={s.cinput} type='' placeholder='Teléfono' name='user_telefono' onChange={(e)=>handleChange(e)} value={input.user_telefono}/>
                    <input className={s.cinput} type='' placeholder='Correo electrónico' name='user_email' onChange={(e)=>handleChange(e)} value={input.user_email}/>
                    <textarea className={s.ctextarea} rows="5" placeholder='Mensaje...' name='mensaje' onChange={(e)=>handleChange(e)} value={input.mensaje}></textarea>
                    <button className={s.cbtn}>Enviar</button>
                    {done && <p className='p-submit'>Recibí tu mensaje, nos comunicaremos en la mayor brevedad.</p>}
                </form>
            </div>
        </div>
    )
}

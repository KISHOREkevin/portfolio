import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID,import.meta.env.VITE_EMAIL_TEMPLATE_ID, form.current, {
                publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div id='contact' className='h-[100vh] flex justify-center items-center border-solid border-2 border-white rounded-md ' >
            <div className='text-xl p-10 lg:mt-15 '>
            <div className='lg:flex lg:space-x-32  items-center w-full flex-wrap'>
                <form className='flex flex-col lg:w-96' ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" className='rounded-md' required />
                    <label>Email</label>
                    <input type="email" name="user_email" className='rounded-md' required />
                    <label>Message</label>
                    <textarea name="message" className='rounded-md' required />
                    <input type="submit" value="Send Mail" className='btn btn-primary mt-3' />
                </form>
                <div className='lg:text-5xl text-3xl text-center mt-5 space-x-5' >
                <a href="https://github.com/KISHOREkevin" target='_blank'><i class='bx bxl-github'></i></a>
                <a href="https://www.linkedin.com/in/kishore-kevin-a5a873290/" target='_blank'><i class='bx bxl-linkedin-square'></i></a>
                
                <a href="https://youtube.com/@kishorekevin5372" target='_blank'><i class='bx bxl-youtube'></i></a>
                <a href="https://mastodon.social/@kishorekevin3289" target='_blank'><i class='bx bxl-mastodon'></i></a>
                <a href="https://www.instagram.com/kishorekevin3289/" target='_blank'><i class='bx bxl-instagram-alt'></i></a>
                  
                <h2 className='lg:text-3xl text-[16px]'>Thanks for visiting <i className="fa-solid fa-heart"></i></h2>
                </div>
               
            </div>
            <div >
               
            </div>
            </div>
        </div>

    );
}

export default Contact

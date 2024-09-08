import React from 'react'
import { FaEnvelope, FaFacebook,FaInstagram,FaLinkedin,FaTwitter, FaWhatsapp,} from 'react-icons/fa'; 
import logo from '../Assets/logo.jpg'


export default function Contact() {
  return (
    <>
      <article className='md:flex'>
         <img src={logo} className='sm:size-full   rounded-bl-full mt-8  md:hidden  ' alt="mypicture" />
        <img src={logo} className='hidden   md:mt-20 md:w-80  rounded-bl-full  mr-64  md:block border-2 border-blue-500  ' alt="mypicture" />
            
               <aside className='justify-center'>
               

                <div className="right-side ">
                <p className='text-gray-400 mt-14 font-medium tracking-widest md:mt-24'>CONTACT ME VIA EMAIL:</p>
                <span className='flex text-white mt-2'>
                   <p><FaEnvelope className=' mt-3 cursor-pointer hover:text-blue-500 text-2xl'/></p>
                   <span className='mt-3 ml-2 tracking-wider md:text-2xl md:mt-1'> abrahamolatunji@gmail.com</span>
                </span>
                <p className='text-gray-400 mt-7 font-medium tracking-widest md:mt-8'>CONTACT ME VIA SOCIAL MEDIA:</p>
                <span className='flex text-white mt-6'>
                  <a href="https://www.facebook.com/abraham.olatunji.58?mibextid=ZbWKwL">
                   <FaFacebook className='text-white cursor-pointer hover:text-blue-500 text-2xl mr-6' />

                  </a>
                  <a href="https://x.com/AbrahamOla88481?t=muINOHhDpn7USoC4rTa7BQ&s=09">
                    <FaTwitter className='text-white cursor-pointer hover:text-blue-300 text-2xl mr-6' />

                  </a>
                  <a href="https://www.linkedin.com/in/abraham-olatunji-bb15a6299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <FaLinkedin className='text-white cursor-pointer hover:text-blue-700 text-2xl mr-6' />

                  </a>
                  <a href="https://www.instagram.com/ab.raham3116?utm_source=qr&igsh=YjN5YjBlMDdla2dt">
                    <FaInstagram className='text-white cursor-pointer hover:text-pink-500 text-2xl ' />

                  </a>
                </span>
                <p className='text-gray-400 mt-7 font-medium tracking-widest md:mt-8'>PREFER A QUICK CHAT ?</p>
                <span className='flex bg-green-700 w-28 px-2 py-1 mt-4 rounded-md hover:bg-green-600'>
                <FaWhatsapp className='text-white cursor-pointer hover:text-pink-500 text-lg mr-1 mt-2' />
                 <a href="https://wa.me/9150536370?text=Hi%F0%9F%91%8B%20Abraham%20Olatunji%20!%0ACan%20we%20have%20a%20conversation%20_______%3F%0A
                  " className='text-white text-md mt-1 mb-1 font-medium tracking-wider'>Whatsapp</a>
                </span>
                
               
               
            </div>

            </aside>
        </article>

       
        <footer className='text-center text-slate-500 mt-8'>©️ 2024 Abraham Olatunji All rights reserved</footer>

    </>
  )
}

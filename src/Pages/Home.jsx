import React from 'react'
import logo from '../Assets/logo.jpg'
import { Typewriter } from 'react-simple-typewriter'
import { FaFacebook,FaInstagram,FaLinkedin,FaTwitter} from 'react-icons/fa'; 


export default function Home() {
  return (
    <>
        <article className='md:flex'>
            <div className="right-side ">
                <p className='text-gray-400 mt-14 font-medium tracking-widest md:mt-24'>WELCOME TO MY SPACE</p>
                <h1 className='text-white font-semibold mt-3 tracking-wide md:text-5xl md:mt-4 md:leading-tight'>
                        Hi, I'm Abraham Olatunji <br /> a website Developer Skilled in
                        <p style={{ color: 'blue', fontWeight: '' }} >
                        <Typewriter
                            words={['< JavaScript />', ' < React />', '<? php ?>', '< Laravel />', '{ mysql }' ]}
                            loop={0} // loop the animation 5 times, or set it to 0 for infinite
                            cursor
                            cursorStyle="|"
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                        </p>
                </h1> 
                <p className='text-gray-400 mt-3 md:w-2/4'>
                I'm a passionate web developer who also excels in ui/ux design
                i merge design insight with technical proficiency to craft intuitive,
                engaging and responsive websites. Focused on user needs, i deliver functional solutions 
                that enhance experience and drive  success.
                </p>
                <a href="https://wa.me/9150536370?text=Hi%F0%9F%91%8B%20Abraham%20Olatunji%20!%0ACan%20we%20have%20a%20conversation%20_______%3F%0A">
                                <button className='text-white font-semibold bg-blue-600 rounded border-2 border-blue-600 py-1 px-3 mt-4 hover:bg-blue-500'>HIRE ME</button> 

                </a>
                <a href="https://github.com/prestigious001">
                                <button className='text-gray-400 font-semibold border-2 border-gray-500 rounded py-1 px-3 mt-4 ml-4 hover:bg-white hover:text-black'>GIT HUB</button>
                </a>
            </div>
            <aside className='justify-center'>
                <img src={logo} className='sm:size-full  rounded-tr-full  rounded-bl-full mt-8  md:hidden  ' alt="mypicture" />
                <img src={logo} className='hidden   md:mt-20 md:w-80 rounded-tr-full  rounded-bl-full  mr-64 ml-[-64px] md:block border-2 border-blue-500  ' alt="mypicture" />
            </aside>
        </article>

        <p className='text-gray-300 text-center mt-5 font-medium  tracking-widest'>
            CONNECT WITH ME ON SOCIAL MEDIA
        </p>
        <div className="socials flex justify-center my-3 text-2xl  gap-6">
                <a href="https://www.facebook.com/abraham.olatunji.58?mibextid=ZbWKwL">      
              <FaFacebook className='text-white cursor-pointer hover:text-blue-500' />
                </a>
            <a href="https://x.com/AbrahamOla88481?t=muINOHhDpn7USoC4rTa7BQ&s=09">
        <FaTwitter className='text-white cursor-pointer hover:text-blue-300' />


            </a>
            <a href="
https://www.linkedin.com/in/abraham-olatunji-bb15a6299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        <FaLinkedin className='text-white cursor-pointer hover:text-blue-700' />


            </a>
            <a href="https://www.instagram.com/ab.raham3116?utm_source=qr&igsh=YjN5YjBlMDdla2dt">

                        <FaInstagram className='text-white cursor-pointer hover:text-pink-500' />

            </a>
        </div>
        <footer className='text-center text-slate-500 mt-8'>©️ 2024 Abraham Olatunji All rights reserved</footer>
    </>
  )
}

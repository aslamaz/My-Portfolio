import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import logo from "../images/logo.png"
import arrowicon from "../images/arrow-icon.png"
import arrowicondark from "../images/arrow-icon-dark.png"
import moonicon from "../images/moon_icon.png"
import sunicon from "../images/sun_icon.png"
import bgcolor from "../images/header-bg-color.png"
import menublack from "../images/menu-black.png"
import menuwhite from "../images/menu-white.png"
import closeblack from "../images/close-black.png"
import closewhite from "../images/close-white.png"
import aslamlogo from "../images/logodark3.png"
import { Link } from 'react-router-dom'

const Header = () => {
  const  navRef = useRef();
  const  navUl = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
        if(window.scrollY >= 50){
            navRef.current.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm',
                'dark:bg-slate-900','dark:shadow-purple-900'
            )
            navUl.current.classList.remove('bg-white', 'bg-opacity-50', 'shadow-sm','dark:border','dark:border-white',
              'dark:bg-transparent'
            )
        }else{
            navRef.current.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm',
                'dark:bg-slate-900','dark:shadow-white')
            navUl.current.classList.add('bg-white', 'bg-opacity-50', 'shadow-sm','dark:border','dark:border-purplr-900',
              'dark:bg-transparent')

        }
    })

   
},[])

 

    const toggleTheme = ()=>{
      document.documentElement.classList.toggle('dark');
      
      if(document.documentElement.classList.contains('dark')){
        localStorage.theme='dark'
      }else{
        localStorage.theme='light'
      }

    }

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

 
  return (
    <div className='overflow-x-hidden'>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <img src={bgcolor} className='w-full'></img>
      </div>
      <nav ref={navRef} className='w-full fixed px-5 lg:px-8 py-4 flex items-center justify-between z-50 xl:px-[8%]'>
        <img src={aslamlogo} alt="logo" className='cursor-pointer w-28 mr-14 dark:hidden' />
        <img src={logo} alt="logo" className='hidden cursor-pointer w-28 mr-14 dark:block' />
        <ul ref={navUl} className='items-center hidden gap-6 px-12 py-3 bg-white bg-opacity-50 rounded-full shadow-sm md:flex lg:gap-8 dark:border dark:border-purple-900 dark:text-white dark:bg-transparent '>
          <li><Link to={'/Home'} onClick={toggleMenu}>Home</Link></li>
          <li><Link to={'/Aboutme'} onClick={toggleMenu}>About me</Link></li>
          <li><Link to={'/Services'} onClick={toggleMenu}>Services</Link></li>
          <li><Link to={'/Mywork'} onClick={toggleMenu}>My Work</Link></li>
          <li><Link to={'/Contactme'} onClick={toggleMenu}>Contact me</Link></li>
        </ul>

        <div className='flex items-center gap-4'>

          <button onClick={toggleTheme}>
            <img src={moonicon} alt="" className='w-6 dark:hidden' />
            <img src={sunicon} alt="" className='hidden w-6 dark:block' />
          </button>

          <a href="/Contactme" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500
            rounded-full ml-4 dark:text-white dark:border-purple-900'>Contact
            <img src={arrowicon} alt='arrow' className='w-3 dark:hidden'></img>
            <img src={arrowicondark} alt='arrow' className='hidden w-3 dark:block'></img>
          </a>
          <button className='block ml-3 md:hidden' onClick={toggleMenu}>
            <img src={menublack} alt="" className='w-6 dark:hidden' />
            <img src={menuwhite} alt="" className='hidden w-6 dark:block' />
          </button>
        </div>
        
        {/* ------------------mobile menu------------------------------ */}
        <ul id='sideMenu' className={`flex md:hidden flex-col py-20 px-10 fixed -right-64 top-0 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} bottom-0 w-64 z-50 h-screen 
         bg-rose-50 transition duration-500 gap-4 dark:bg-[#2a004a] dark:text-white`}>
          <div className='absolute right-6 top-6' onClick={toggleMenu}>
            <img src={closeblack} alt="" className='w-5 dark:hidden' />
            <img src={closewhite} alt="" className='hidden w-5 dark:block' />
          </div>
          <li><Link to={'/Home'} onClick={toggleMenu}>Home</Link></li>
          <li><Link to={'/Aboutme'} onClick={toggleMenu}>About me</Link></li>
          <li><Link to={'/Services'} onClick={toggleMenu}>Services</Link></li>
          <li><Link to={'/Mywork'} onClick={toggleMenu}>My Work</Link></li>
          <li><Link to={'/Contactme'} onClick={toggleMenu}>Contact me</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
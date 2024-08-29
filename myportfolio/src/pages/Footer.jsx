import React from 'react'
import logo from "../images/logo.png"
import aslamlogo from "../images/logodark3.png"
import mailicon from '../images/mail_icon.png'
import mailicondark from '../images/mail_icon_dark.png'
import intaicon from '../images/insta.png'
import giticon from '../images/github.png'
import likedinicon from '../images/likedin.png'
import facebookicon from '../images/facbook.png'
// import twittericon from '../images/twitter.png'
// import twittericon from '../images/whitetwitter.png'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className='duration-100 dark:text-white dark:bg-slate-900'>
            <div className='mt-20'>
                <div className='text-center'>
                    <img src={aslamlogo} alt="" className='mx-auto mb-2 w-36 dark:hidden' />
                    <img src={logo} alt="" className='hidden mx-auto mb-2 w-36 dark:block' />
                    <div className='flex items-center gap-2 mx-auto w-max'>
                        <img src={mailicon} alt="" className='w-6 dark:hidden' />
                        <img src={mailicondark} alt="" className='hidden w-6 dark:block' />
                        muhammedazeez473@gmail.com
                    </div>
                </div>

                <div className='text-center sm:flex items-center justify-between border-t border-gray-400
            mx-[10%] my-12 py-6'>
                    <p>© 2024 Muhammed Aslam. All rights reserved.</p>
                    <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
                        <li> <Link to="https://instagram.com/mmhd_aslam"><img src={intaicon} alt="" className='w-5 sm:w-7' /></Link> </li>
                        <li> <Link to="https://github.com/aslamaz"><img src={giticon} alt="" className='w-5 sm:w-7' /></Link> </li>
                        <li> <Link to="https://linkedin.com/in/aslamaz"><img src={likedinicon} alt="" className='w-5 sm:w-7' /></Link> </li>
                        <li> <Link to="https://facebook.com/mmhd_aslam"><img src={facebookicon} alt="" className='w-5 sm:w-7' /></Link></li>
                        {/* <li> <Link to="https://instagram.com/mmhd_aslam"><img src={twittericon} alt="" className='w-5 sm:w-7 dark:hidden' /></Link></li>
                        <li> <Link to="https://instagram.com/mmhd_aslam"><img src={twittericon} alt="" className='hidden w-5 sm:w-7 dark:block' /></Link></li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
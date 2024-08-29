import React from 'react'
import Resume from '../images/aslam_frontend_dev_2024_04_27.pdf'
import profileimg from '../images/profileimg.png'
import handicon from '../images/hand-icon.png'
import rightarrowwhite from '../images/right-arrow-white.png'
import downloadicon from '../images/download-icon.png'
import htmlicon from '../images/html.png'
import Cssicon from '../images/css.png'
import jsicon from '../images/js.png'
import tsicon from '../images/ts.png'
import reacticon from '../images/react.png'
import tailwindicon from '../images/tailwind.png'
import nodeicon from '../images/node.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='duration-100 dark:text-white dark:bg-slate-900'>
            <div className='flex flex-col items-center justify-center w-11/12 h-screen max-w-3xl gap-4 mx-auto text-center'>
                <img src={profileimg} alt='' className='w-32 rounded-full'></img>
                <h3 className='flex items-center gap-2 mb-3 text-xl md:text-2xl'>Hi I'm Muhammed Aslam <img src={handicon} alt='' className='w-6'></img></h3>
                <h1 className='text-3xl sm:text-6xl lg:text-[66px]'>frotend Developer based in Kerala.</h1>
                <p className='max-w-2xl mx-auto'>I am a frotend developer from kerala, India with 5 months of experience in MERN.</p>

            

                <ul className='flex items-center gap-3 mt-3 sm:gap-5'>
                <h4 className='my-3 text-xl font-bold text-gray-700 dark:text-white'>My Skills :</h4>
                    <li className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer sm:w-14 aspect-square hover:translate-y-1'>
                        <img src={htmlicon} alt="" className='w-5 sm:w-7' />
                    </li>
                    <li className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer sm:w-14 aspect-square hover:translate-y-1'>
                        <img src={Cssicon} alt="" className='w-5 sm:w-7' />
                    </li>
                    <li className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer sm:w-14 aspect-square hover:translate-y-1'>
                        <img src={jsicon} alt="" className='w-5 sm:w-7' />
                    </li>
                    <li className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer sm:w-14 aspect-square hover:translate-y-1'>
                        <img src={tsicon} alt="" className='w-5 sm:w-7' />
                    </li>
                    <li className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer sm:w-14 aspect-square hover:translate-y-1'>
                        <img src={tailwindicon} alt="" className='w-5 sm:w-7' />
                    </li>
                    <li className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer sm:w-14 aspect-square hover:translate-y-1'>
                        <img src={reacticon} alt="" className='w-5 sm:w-7' />
                    </li>
                    <li className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer sm:w-14 aspect-square hover:translate-y-1'>
                        <img src={nodeicon} alt="" className='w-5 sm:w-7' />
                    </li>
                </ul>

                <div className='flex flex-col items-center gap-4 mt-4 sm:flex-row'>
                    <Link
                        to={'/Contactme'} className='px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6]
                          to-[#da7d20] text-white text-wrap flex items-center gap-2'>contact me <img src={rightarrowwhite} alt="" className='w-4' />
                    </Link>

                    <a href={Resume} download
                        className='flex items-center gap-2 px-10 py-3 bg-white border border-gray-500 rounded-full dark:text-black'>my resume<img src={downloadicon} alt="" className='w-4' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home
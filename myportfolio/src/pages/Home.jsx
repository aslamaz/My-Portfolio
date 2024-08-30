import React from 'react'
import Resume from '../images/aslam_frontend_dev_2024_04_27.pdf'
import profileimg from '../images/profileimg.png'
import handicon from '../images/hand-icon.png'
import rightarrowwhite from '../images/right-arrow-white.png'
import downloadicon from '../images/download-icon.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='duration-100 dark:text-white dark:bg-slate-900'>
            <div className='flex flex-col items-center justify-center w-11/12 h-screen max-w-3xl gap-4 mx-auto text-center'>
                <img src={profileimg} alt='' className='w-32 rounded-full'></img>
                <h3 className='flex items-center gap-2 mb-3 text-xl md:text-2xl'>Hi I'm Muhammed Aslam <img src={handicon} alt='' className='w-6'></img></h3>
                <h1 className='text-3xl sm:text-6xl lg:text-[66px]'>frontend Developer based in Kerala.</h1>
                <p className='max-w-2xl mx-auto'>I am a frontend developer from kerala, India with 5 months of experience in MERN.</p>

            

                

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
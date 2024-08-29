import React from 'react'
import ecommerce from '../images/ecommerce.jpg'
import netflixClone from '../images/netflixClone.jpg'
import workimg3 from '../images/work-3.png'
import workimg4 from '../images/work-4.png'
import sendicon from '../images/send-icon.png'
import rightArrowbold from '../images/right-arrow-bold.png'
import rightArrowbolddark from '../images/right-arrow-bold-dark.png'

const Mywork = () => {
    return (
        <div className='duration-100 dark:text-white dark:bg-slate-900'>
            <div className='w-full px-[12%] py-10 mt-20'>
                <h4 className='mb-2 text-lg text-center'>My Portfolio</h4>
                <h2 className='text-5xl text-center'>My Latest Work</h2>
                <p className='max-w-2xl mx-auto mt-5 mb-12 text-center'>
                    Welcome to my web development portfolio! Explore a collection of projects showcasing
                    my expertise in Frontend development.
                </p>

                <div className='grid grid-cols-1 gap-5 my-10 sm:grid-cols-4 dark:text-black'>
                    <div className='relative bg-center bg-no-repeat bg-cover rounded-lg cursor-pointer aspect-square '>
                        <img src={ecommerce} alt="" className='rounded-xl'/>
                        <div className='absolute flex items-center justify-between w-10/12 px-5 py-3 duration-500 bg-white rounded-md hover:translate-y-1 bottom-5 left-7 group-hover:bottom-7'>
                                <div>
                                    <h2 className='font-semibold'>Full-Stack Project</h2>
                                    <p className='text-sm text-gray-700'>E- Commerce</p>
                                </div>
                                <div className="border rounded-full border-black w-9 aspect-square flex items-center 
                                justify-center shadow-[2px_2px_0_#000] duration-500 hover:bg-lime-300 transition">
                                    <img src={sendicon} alt="" className='w-5'/>
                                </div>
                        </div>
                    </div>

                    <div className='relative bg-center bg-no-repeat bg-cover rounded-lg cursor-pointer aspect-square '>
                        <img src={netflixClone} alt="" className='rounded-xl'/>
                        <div className='absolute flex items-center justify-between w-10/12 px-5 py-3 duration-500 bg-white rounded-md hover:translate-y-1 bottom-5 left-7 group-hover:bottom-7'>
                                <div>
                                    <h2 className='font-semibold'>Frotend Project</h2>
                                    <p className='text-sm text-gray-700'>Netflix Clone</p>
                                </div>
                                <div className="border rounded-full border-black w-9 aspect-square flex items-center 
                                justify-center shadow-[2px_2px_0_#000] duration-500 hover:bg-lime-300 transition">
                                    <img src={sendicon} alt="" className='w-5'/>
                                </div>
                        </div>
                    </div>

                    <div className='relative bg-center bg-no-repeat bg-cover rounded-lg cursor-pointer aspect-square '>
                        <img src={workimg3} alt="" />
                        <div className='absolute flex items-center justify-between w-10/12 px-5 py-3 duration-500 bg-white rounded-md hover:translate-y-1 bottom-5 left-7 group-hover:bottom-7'>
                                <div>
                                    <h2 className='font-semibold'>Frotend Project</h2>
                                    <p className='text-sm text-gray-700'>Web Design</p>
                                </div>
                                <div className="border rounded-full border-black w-9 aspect-square flex items-center 
                                justify-center shadow-[2px_2px_0_#000] duration-500 hover:bg-lime-300 transition">
                                    <img src={sendicon} alt="" className='w-5'/>
                                </div>
                        </div>
                    </div>

                    <div className='relative bg-center bg-no-repeat bg-cover rounded-lg cursor-pointer aspect-square '>
                        <img src={workimg4} alt="" />
                        <div className='absolute flex items-center justify-between w-10/12 px-5 py-3 duration-500 bg-white rounded-md hover:translate-y-1 bottom-5 left-7 group-hover:bottom-7'>
                                <div>
                                    <h2 className='font-semibold'>Frotend Project</h2>
                                    <p className='text-sm text-gray-700'>Web Design</p>
                                </div>
                                <div className="border rounded-full border-black w-9 aspect-square flex items-center 
                                justify-center shadow-[2px_2px_0_#000] duration-500 hover:bg-lime-300 transition">
                                    <img src={sendicon} alt="" className='w-5'/>
                                </div>
                        </div>
                    </div>

                </div>
                
                <a href='#' className='w-max flex items-center justify-center gap-2 text-gray-700
                border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20
                hover:bg-[#fcf4ff] duration-500 dark:text-white dark:border-white dark:hover:bg-[#2a004a]
                '>Show more
                    <img src={rightArrowbold} alt="" className='w-4 dark:hidden'/>
                    <img src={rightArrowbolddark} alt="" className='hidden w-4 dark:block'/>
                </a>
            </div>
        </div>
    )
}

export default Mywork
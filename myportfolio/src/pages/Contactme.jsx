import React from 'react'
import footerbgcolor from '../images/footer-bg-color.png'
import rightarrow from '../images/right-arrow-white.png'
import Footer from './Footer'

const Contactme = () => {
    return (
        <div style={{ backgroundImage: `url(${footerbgcolor})`}}>
        <div  className ='duration-100 dark:bg-slate-900'>
            <div className='w-full px-[12%] py-10 mt-20 bg-no-repeat bg-[length:90%_auto] bg-center'>
                <h4 className='mb-2 text-lg text-center'>Connect with me</h4>
                <h2 className='text-5xl text-center'>Get in Touch</h2>
                <p className='max-w-2xl mx-auto mt-5 mb-12 text-center'>
                    Welcome to my web development portfolio! Explore a collection of projects showcasing
                    my expertise in Frontend development.
                </p>

                <form method='POST' action="https://api.web3forms.com/submit" className='max-w-2xl mx-auto'>
                <input type="hidden" name="access_key" value="edaaa38e-321a-4456-ac7b-9fff99d55392"/>

                    <div className='grid gap-6 mt-10 mb-8 grid-cols-auto'>
                        <input type='text' placeholder='Enter your name' className=' flex-1 p-3 outline-none
                        border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#2a004a]
                        dark:border-purple-900' required name='name'></input>

                        <input type='text' placeholder='Enter your email' className=' flex-1 p-3 outline-none
                        border-[0.5px] border-gray-400 rounded-md bg-white  dark:bg-[#2a004a]
                        dark:border-purple-900' required name='email'></input>
                    </div>
                    <textarea rows="6" placeholder='Enter your mesage' className='w-full p-4 outline-none
                    border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:border-purple-900 dark:bg-[#2a004a]' required name='message'>
                    </textarea>
                    <button className='flex items-center justify-between gap-2 px-8 py-3 mx-auto text-white rounded-full w-max bg-black/80 hover:bg-black
                    dark:bg-transparent dark:border-[0.5px] dark:hover:bg-[#2a004a]'>Submit now
                        <img src={rightarrow} alt="" className='w-4'/>
                    </button>
                </form>
            </div>

            <Footer></Footer>
        </div>
        </div>
    )
}

export default Contactme
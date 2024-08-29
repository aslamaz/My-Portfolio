import React, { useState } from 'react'
import webicon from '../images/web-icon.png'
import rightarrow from '../images/right-arrow.png'
import rightarrowwhite from '../images/right-arrow-white.png'
import mobileicon from '../images/mobile-icon.png'
import uiicon from '../images/ui-icon.png'
import graphicsicon from '../images/graphics-icon.png'
import CardComponent from './CardComponent'

const Services = () => {
    // const [showMore, setShowMore] = useState(false);

    // const toggleContent = () => {
    //   setShowMore(!showMore);
    // };
    return (
        <div className='duration-100 dark:text-white dark:bg-slate-900'>
            <div className='w-full px-[12%] py-10 mt-20'>
                <h4 className='mb-2 text-lg text-center'>What i Offer</h4>
                <h2 className='text-5xl text-center'>My Services</h2>
                <p className='max-w-2xl mx-auto mt-5 mb-12 text-center'>
                    I am a frotend developer from kerala, India with 5 moths experience in Mern stack.
                    Still i am a trainee position and seeking for a good job.
                </p>

                <div className='grid gap-6 my-10 grid-cols-auto'>

                    <CardComponent
                        icon={webicon}
                        title="Web Design"
                        description="I craft visually appealing, responsive websites that provide seamless user experiences across all devices. My focus is on clean design, 
                        intuitive navigation, and functionality that aligns with your brand’s goals."
                        readMoreLink="your-link-here"
                        rightArrow={rightarrow}
                        rightArrowWhite={rightarrowwhite}
                    />
                    <CardComponent
                        icon={mobileicon}
                        title="Mobile App"
                        description="I develop user-friendly mobile applications that prioritize performance, security, and a smooth user experience. My apps are designed to be responsive and engaging,
                         tailored to meet the unique needs of your business."
                        readMoreLink="your-link-here"
                        rightArrow={rightarrow}
                        rightArrowWhite={rightarrowwhite}
                    />
                    <CardComponent
                        icon={graphicsicon}
                        title="Graphics Design"
                        description="As a beginner in graphic design, I'm focused on building a strong foundation in creating simple, yet effective designs.
                         I’m learning to blend creativity with design principles to produce visuals that communicate clearly and resonate with audiences."
                        readMoreLink="your-link-here"
                        rightArrow={rightarrow}
                        rightArrowWhite={rightarrowwhite}
                    />








                </div>
            </div>
        </div>
    )
}

export default Services
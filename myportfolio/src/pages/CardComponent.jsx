import React, { useState } from 'react'

const CardComponent = ({ icon, title, description, readMoreLink, rightArrow, rightArrowWhite }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='px-8 py-12 border border-gray-400 rounded-lg
    hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1
    duration-500  dark:border-purple-900
dark:hover:shadow-white dark:hover:bg-[#2a004a]/50'>
            <img src={icon} alt='' className='w-10' />
            <h3 className='my-4 text-lg text-gray-700 dark:text-white'>{title}</h3>
            <p className='text-sm leading-5 text-gray-600 dark:text-white'>
                {isExpanded ? description : `${description.slice(0, 50)}...`}
            </p>
            <a onClick={toggleReadMore} className='flex items-center gap-2 mt-5 text-sm cursor-pointer'>
                {isExpanded ? "Show less" : "Read more"}
                <img src={isExpanded ? rightArrowWhite : rightArrow} alt="" className='w-4 dark:hidden' />
                <img src={isExpanded ? rightArrow : rightArrowWhite} alt="" className='hidden w-4 dark:block' />
            </a>
        </div>
    )
}

export default CardComponent
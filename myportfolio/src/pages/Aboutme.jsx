import React from 'react'
import userimage from '../images/aboutprofile.jpg'
import codeicon from '../images/code-icon.png'
import codeicondark from '../images/code-icon-dark.png'
import eduicon from '../images/edu-icon.png'
import eduicondark from '../images/edu-icon-dark.png'
import projecticon from '../images/project-icon.png'
import projecticondark from '../images/project-icon-dark.png'
import vscodeicon from '../images/vscode.png'
import firebaseicon from '../images/firebase.png'
import gitlogo from '../images/git.png'
import mogodbicon from '../images/mongodb.png'
import bootstraplogo from '../images/bootstrap-logo.png'
import htmlicon from '../images/html.png'
import Cssicon from '../images/css.png'
import jsicon from '../images/js.png'
import tsicon from '../images/ts.png'
import reacticon from '../images/react.png'
import tailwindicon from '../images/tailwind.png'
import nodeicon from '../images/node.png'

const Aboutme = () => {
  return (
    <div className='duration-100 dark:text-white dark:bg-slate-900'>
      <div className='w-full px-[12%] py-10 mt-20'>
        <h4 className='mb-2 text-lg text-center'>Introduction</h4>
        <h2 className='text-5xl text-center'> About me</h2>

        <div className='flex flex-col items-center w-full gap-20 my-20 lg:flex-row'>
          <div className='relative mx-auto max-w-max'>
            <img src={userimage} alt="" className='w-64 sm:w-80 rounded-3xl max-w-none' />
          </div>

          <div className='flex-1'>
            <p className='max-w-2xl mb-10'>
              I am an experienced Frontend Developer with over a decade of professional expertise in the field .
              Throughout my career, I had the privilege of collerborating with prestigious organisations,
              contributing their success and growth.
            </p>

            <ul className='grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3'>

              <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff]
                  hover:translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] dark:border-purple-900
                  dark:hover:shadow-white dark:hover:bg-[#2a004a]/50'>
                <img src={codeicon} alt="" className='mt-3 w-7 dark:hidden' />
                <img src={codeicondark} alt="" className='hidden mt-3 w-7 dark:block' />
                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>Languages</h3>
                <p className='text-sm text-gray-600 dark:text-white'>HTML, CSS, JavaScript, React Js, Next Js, Epress Js</p>
              </li>

              <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff]
                  hover:translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]  dark:border-purple-900
                  dark:hover:shadow-white dark:hover:bg-[#2a004a]/50'>
                <img src={eduicon} alt="" className='mt-3 w-7 dark:hidden' />
                <img src={eduicondark} alt="" className='hidden mt-3 w-7 dark:block' />
                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>Education</h3>
                <p className='text-sm text-gray-600 dark:text-white'>Diploma in Computer Science</p>
              </li>

              <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff]
                  hover:translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]  dark:border-purple-900
                  dark:hover:shadow-white dark:hover:bg-[#2a004a]/50'>
                <img src={projecticon} alt="" className='mt-3 w-7 dark:hidden' />
                <img src={projecticondark} alt="" className='hidden mt-3 w-7 dark:block' />
                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>Projects</h3>
                <p className='text-sm text-gray-600 dark:text-white'>E-Commerce, Netflix clone</p>
              </li>

            </ul>

            <h4 className='my-6 text-gray-700 dark:text-white'>My Skills:</h4>

            <ul className='flex flex-wrap gap-3 mt-3 sm:gap-5'>
              <li className='flex items-center justify-center w-[calc(50%-6.25rem)] sm:w-14 duration-500 border border-gray-400 rounded-lg cursor-pointer aspect-square hover:translate-y-1'>
                <img src={htmlicon} alt="" className='w-5 sm:w-7' />
              </li>
              <li className='flex items-center justify-center w-[calc(50%-6.25rem)] sm:w-14 duration-500 border border-gray-400 rounded-lg cursor-pointer aspect-square hover:translate-y-1'>
                <img src={Cssicon} alt="" className='w-5 sm:w-7' />
              </li>
              <li className='flex items-center justify-center w-[calc(50%-6.25rem)] sm:w-14 duration-500 border border-gray-400 rounded-lg cursor-pointer aspect-square hover:translate-y-1'>
                <img src={jsicon} alt="" className='w-5 sm:w-7' />
              </li>
              <li className='flex items-center justify-center w-[calc(50%-6.25rem)] sm:w-14 duration-500 border border-gray-400 rounded-lg cursor-pointer aspect-square hover:translate-y-1'>
                <img src={tsicon} alt="" className='w-5 sm:w-7' />
              </li>
              <li className='flex items-center justify-center w-[calc(50%-6.25rem)] sm:w-14 duration-500 border border-gray-400 rounded-lg cursor-pointer aspect-square hover:translate-y-1'>
                <img src={tailwindicon} alt="" className='w-5 sm:w-7' />
              </li>
              <li className='flex items-center justify-center w-[calc(50%-6.25rem)] sm:w-14 duration-500 border border-gray-400 rounded-lg cursor-pointer aspect-square hover:translate-y-1'>
                <img src={reacticon} alt="" className='w-5 sm:w-7' />
              </li>
              <li className='flex items-center justify-center w-[calc(50%-6.25rem)] sm:w-14 duration-500 border border-gray-400 rounded-lg cursor-pointer aspect-square hover:translate-y-1'>
                <img src={nodeicon} alt="" className='w-5 sm:w-5' />
              </li>
            </ul>

            <h4 className='my-6 text-gray-700 dark:text-white'>Tools i Use</h4>

            <ul className='flex items-center gap-3 sm:gap-5'>
              <li className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer sm:w-14 aspect-square hover:translate-y-1'>
                <img src={vscodeicon} alt="" className='w-5 sm:w-7' />
              </li>
              <li className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer sm:w-14 aspect-square hover:translate-y-1'>
                <img src={firebaseicon} alt="" className='w-5 sm:w-7' />
              </li>

              <li className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer sm:w-14 aspect-square hover:translate-y-1'>
                <img src={gitlogo} alt="" className='w-5 sm:w-7' />
              </li>
              <li className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer sm:w-14 aspect-square hover:translate-y-1'>
                <img src={mogodbicon} alt="" className='w-5 sm:w-7' />
              </li>
              <li className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer sm:w-14 aspect-square hover:translate-y-1'>
                <img src={bootstraplogo} alt="" className='w-5 sm:w-7' />
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutme
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[450px]
    md:w-[500px] xl:w-[700px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 
    cursor-pointer transition-opacity duration-20 overflow-hidden'>
      <motion.img
       initial={{ y:-100,opacity:0}}
       transition={{ duration:1.2}}
       whileInView={{ opacity:1,y:0}}
       viewport={{ once:true }}

       className='w-32 h-32 rounded-full xl:h-[200px] xl:w-[200px] object-cover 
       object-center'
       src='https://www.dhm.ma/img/logo.svg'
       alt=''
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Intern at DIGITAL HOUSE MEDIAagency</h4>
        <p className='font-bold text-2xl mt-1'>DHM</p>
        <div className='flex space-x-2 my-2'>
            <img 
             className='h-16 w-16 rounded-full'
             src="https://www.creative-tim.com/assets/frameworks/icon-react-5dcce0e652c9eb91ff22e246cbf7b98a63b87847a29847b514f1e3b358628084.png" 
             alt=""
            />
             <img 
             className='h-16 w-16 rounded-full'
             src="https://www.creative-tim.com/assets/frameworks/icon-nextjs-552cecd0240ba0ae7b5fbf899c1ee10cd66f8c38ea6fe77233fd37ad1cff0dca.png" 
             alt=""
            />
             <img 
             className='h-16 w-16 rounded-full'
             src="https://www.creative-tim.com/assets/frameworks/icon-tailwind-c706945f029340229d0a5bbfb2f4d975eb331c42a18bc45f027324a14c24fcef.png" 
             alt=""
            /><img 
            className='h-16 w-16 rounded-full'
            src="https://www.creative-tim.com/assets/frameworks/icon-nodejs-262271f6248c0b85bfa97feccbf35174d07df466c466aaa383518aaa2d2d41e4.png" 
            alt=""
           />
           <img 
           className='h-16 w-16 rounded-full'
           src="https://cdn.sanity.io/images/81pocpw8/production/1dd1c1b6fdc594da5e332e885db7eb45c10c98a5-2400x2400.png?w=320&h=320&fit=clip&auto=format" 
           alt=""
          />
        </div>

        <p className='uppercase py-5 text-gray-300'>Started traineeship:10/07/2022 - Ended:10/09/2022</p>
        
        <ul className='list-disc space-y-4 ml-5 text-lg '>
            <li>Summary points Summary pointsSummary points</li>
            <li>Summary points Summary pointsSummary points</li>
            <li>Summary points Summary pointsSummary points</li>
            <li>Summary points Summary pointsSummary points</li>  
            <li>Summary points Summary pointsSummary points</li>
        </ul>
      </div>
    </article>
  )
}
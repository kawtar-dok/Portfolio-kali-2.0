import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px]
    md:w-[600px] xl:w-[900px]'>
      <motion.img
       initial={{ y:-100,opacity:0}}
       transition={{ duration:1.2}}
       whileInView={{ opacity:1,y:0}}
       viewport={{once:true}}

       className='w-32 h-32 rounded-full xl:h-[200px] xl:w-[200px] object-cover 
       object-center'
       src='https://www.dhm.ma/img/logo.svg'
       alt=''
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Stagiaire at DHM agency</h4>
        <p className='font-bold text-2xl mt-1'>DHM DIGITAL HOUSE MEDIA</p>
        <div className='flex space-x-2 my-2'>
            <img 
             className='h-16 w-16 rounded-full'
             src="https://cdn.sanity.io/images/81pocpw8/production/2fb3e3d06baba0ca5700d94f578d4cacec4efade-491x438.svg?h=71&fit=max&auto=format" 
             alt=""
            />
             <img 
             className='h-16 w-16 rounded-full'
             src="https://cdn.sanity.io/images/81pocpw8/production/1dd1c1b6fdc594da5e332e885db7eb45c10c98a5-2400x2400.png?w=320&h=320&fit=clip&auto=format" 
             alt=""
            />
        </div>

        <p className='uppercase py-5 text-gray-300'>Started work...-Ended...</p>
        
        <ul className='list-disc space-y-4 ml-5 text-lg '>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
        </ul>
      </div>
    </article>
  )
}
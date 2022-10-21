import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity';
import { PageInfo } from '../typing'

type Props = {
  pageInfo: PageInfo;
}

export default function About({ pageInfo}: Props) {
  return (
 <motion.div 
 initial={{ opacity:0}}
 whileInView={{ opacity:1}}
 transition={{ duration:1.5}}

 className='flex flex-col relative h-screen text-center md:text-left md:flex-row
     max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
        </h3>
    
    <motion.img 
    initial={{ x: -200,opacity:0,}}
    transition={{ duration:1.2}}
    whileInView={{ x:0,opacity:1}}
    viewport={{ once: true}}
    
    className="-mb-20 mt-12 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full 
    md:rounded-lg md:w-72 md:h-72 xl:w-[415px] xl:h-[415px]"
    src={urlFor(pageInfo?.porfilePic).url()}
    alt=''
    />
   <div className='space-y-10 px-0 md:px-10'> 
      <h4 className='text-4xl font-semibold'>
        Here is a{" "}<span className='underline decoration-[#EC407A]/50'>little</span>{" "}background
      </h4>
      <p className='text-sm'>
       {pageInfo?.backgroundInformations}
       {/*  <span className="uppercase text-gray-400 tracking-[3px] font-bold">Skills & Interests:</span>{" "}JavaScript, React, HTML5, CSS, Git, Github,
          Angular, Vue, Testing, ASP.NET, SQL.*/}  
      </p>
   </div>
  
    
   
    </motion.div>
  )
}
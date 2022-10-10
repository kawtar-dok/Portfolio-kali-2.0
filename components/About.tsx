import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
 <motion.div 
 initial={{ opacity:0}}
 whileInView={{ opacity:1}}
 transition={{ duration:1.5}}

 className='flex flex-col relative h-screen text-center md:text-left md:flex-row
     max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
        </h3>
    
    <motion.img 
    initial={{ x: -200,opacity:0,}}
    transition={{ duration:1.2}}
    whileInView={{ x:0,opacity:1}}
    viewport={{ once: true}}
    
    className="-mb-20  md:mb-0 flex-shrink-0 w-52 h-52 rounded-full 
    md:rounded-lg md:w-72 md:h-72 xl:w-[415px] xl:h-[415px]"
    src='/kaw.jpg'
    alt=''
    />
   <div className='space-y-10  px-0 md:px-10'> 
      <h4 className='text-4xl font-semibold'>
        Here is a{" "}<span className='underline decoration-[#EC407A]/50'>little</span>{" "}background
      </h4>
      <p className='text-sm'>
          I'am Kawtar. You might also know me as Kali! 
          I am a motivated and driven Fullstack developer. My passion is playing around with ideas and being able to
          make a difference. 
          <br /> I have a huge interest for design and creativity, and often
          find myself drawn into the idea of creating something "new". I am also
          a big photo enthusiast, often roaming the streets taking photos of the
          world and the people I meet along the way. <br />
          <br />
       {/*  <span className="uppercase text-gray-400 tracking-[3px] font-bold">Skills & Interests:</span>{" "}JavaScript, React, HTML5, CSS, Git, Github,
          Angular, Vue, Testing, ASP.NET, SQL.*/}  
      </p>
   </div>
  
    
   
    </motion.div>
  )
}
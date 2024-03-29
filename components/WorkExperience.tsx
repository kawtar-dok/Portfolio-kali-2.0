import { motion } from 'framer-motion'
import React from 'react'
import { Experience } from '../typing'
import ExperienceCard from './ExperienceCard'

type Props = {
  experiences: Experience[]
}

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div 
    initial={{ opacity:0}}
    whileInView={{ opacity:1}}
    transition={{ duration:1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:text-left md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 md:top-16 xl:top-16  uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
        </h3>
    
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
       scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#EC407A]/80'>
        {/* ExperienceCard 1 */}
        {experiences?.map(experience => ( 
          <ExperienceCard 
          key={experience._id}
          experience={experience}
          />
        ))}
      </div>
    </motion.div>
  )
}
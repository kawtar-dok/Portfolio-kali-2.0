import { motion } from 'framer-motion'
import React from 'react'
import SkillCard from './SkillCard'
import { Skill } from "../typing"

type Props = {
  skills: Skill[];
}

function Skills({ skills }: Props) {
  return (
    <motion.div 
      initial={{ opacity:0 }}
      whileInView={{ opacity:1}}
      transition={{ duration:1.5 }}

      className=' flex relative flex-col  text-center 
      md:text-left xl:flex-row  md:top-0
      max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
       <h3 className='absolute tracking-[20px] uppercase top-20 xl:top-20 text-gray-500 text-2xl'>
        Skills
       </h3>
       <h3 className='absolute  top-32  uppercase tracking-[3px] text-gray-500 text-sm'>
         Hover over a skill for currency proficiency
       </h3>
       <div className='xl:w-[80%] items-center justify-center'>
         <div className='grid grid-cols-6 gap-4 mt-24   xl:grid-cols-8 xl:p-5'>
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <SkillCard
          key={skill._id}
          skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <SkillCard
          key={skill._id}
          skill={skill} 
          directionLeft/>
        ))}
        </div>
       </div>
    </motion.div>
  )
}

export default Skills
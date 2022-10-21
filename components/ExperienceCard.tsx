import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity';
import { Experience } from '../typing';

type Props = {
  experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col mt-24 rounded-lg items-center space-y-7 flex-shrink-0 w-[450px] h-[80%] 
    md:w-[500px] md:h-[600px] xl:w-[700px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 
    cursor-pointer transition-opacity duration-20 overflow-hidden'>
      <motion.img
       initial={{ y:-100,opacity:0}}
       transition={{ duration:1.2}}
       whileInView={{ opacity:1,y:0}}
       viewport={{ once:true }}

       className='w-32 h-32 rounded-full xl:h-[200px] xl:w-[200px] object-cover 
       object-center'
       src={urlFor(experience?.companyImage).url()}
       alt=''
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{experience.jobTitle}</h4>
        <p className='font-bold text-2xl mt-1'>{experience.compagny}</p>
        <div className='flex space-x-2 my-2'>
           {experience.technologies.map((technology) => (
            <img
            key={technology._id}
            className="h-10 w-10 rounded-full"
            src={urlFor(technology.image).url()}
            />
           ))}
        </div>

        <p className='uppercase py-5 text-gray-300'>
         {new Date(experience.dateStarted).toDateString()} - {" "}
         {experience.isCurrentlyWorkingHere
           ? "Present"
           : new Date(experience.dateEnded).toDateString()}
        </p>
        
        <ul className='list-disc space-y-4 ml-5 text-lg h-48 whitespace-pre-line overflow-y-scroll 
        pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#EC407A]/80'>
            {experience.points.map((point, i) => (
              <li key={i} >{point}</li>
            ))}
        </ul>
      </div>
    </article>
  )
}
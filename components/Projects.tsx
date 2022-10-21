import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'
import { Project } from '../typing'

type Props = {
    projects: Project[];
}

function Projects({ projects }: Props) {
  return (
    <motion.div
    initial={{ opacity:0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration:1.5 }}
    className='h-screen relative flex   overflow-hidden flex-col text-left
     md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>
         
         <div className='mt-28 relative w-full flex overflow-x-scroll overflow-hidden snap-x snap-mandatory z-20  h-screen
          scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#EC407A]/80 '>
            {/* Projects */}
            {projects?.map((project,i) => (
                <div 
                 key={project._id}
                 className='w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center p-20 md:p-44'>
                    <motion.img 
                    className='justify-center items-center object-cover '
                    initial={{ y:-300,opacity:0}}
                    transition={{ duration:1.2}}
                    whileInView={{ opacity:1,y:0}}
                    viewport={{ once:true }}
                    src={urlFor(project.image).url()}
                    alt='' 
                    />

                    <div className='space-y-7  px-0  md:px-10 max-w-6xl'>
                        <h4 className='text-3xl  font-semibold text-center'>
                            <span className=' text-[#EC407A]/50'>
                            Case Study {i+1} of {projects.length}: 
                            </span>{" "}
                            {project?.title} 
                            </h4>

                            <div className='items-center justify-center text-center
                            cursor-pointer no-underline decoration-pink-500 hover:underline hover:text-xl'>
                               <Link href={project?.linkToBuild ? project?.linkToBuild : ""}>
                                   <h1 className=' tracking-[2px] text-gray-300'>
                                     {project?.linkToBuild}
                                   </h1>
                             </Link>
                             </div>

                      <div className='flex space-x-2 my-2 justify-center '>
                                   {project.technologies.map((technology) => (
                            <img
                             key={technology._id}
                             className="h-5 w-5 rounded-full"
                             src={urlFor(technology.image).url()}
                                     />
                                 ))}
                            </div>
                            
                            <p className=' 
                            list-disc space-y-4 ml-5 tracking-[1px]  h-48  overflow-y-scroll 
                            pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#EC407A]/80
                             whitespace-pre-line'>
                            {project.summary}
                            </p>
                    </div>
                </div>
            ))}
         </div>


        <div className='w-full absolute top-[30%] bg-[#EC407A]/30 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects
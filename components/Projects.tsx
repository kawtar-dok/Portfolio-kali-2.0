import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3,4,5]
  return (
    <motion.div
    initial={{ opacity:0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration:1.5 }}
    className='h-screen relative flex overflow-hidden flex-col text-left
     md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>
         
         <div className='relative w-full flex overflow-x-scroll overflow-hidden snap-x snap-mandatory z-20
          scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#EC407A]/80 '>
            {/* Projects */}
            {projects.map((project,i) => (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img 
                    initial={{ y:-300,opacity:0}}
                    transition={{ duration:1.2}}
                    whileInView={{ opacity:1,y:0}}
                    viewport={{ once:true }}
                    src='https://www.bi-on-focus.nl/wp-content/uploads/2019/03/Power-BI-iPhone-iPad-Surface1-695x298.png' 
                    alt='' 
                    />

                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-3xl font-semibold text-center'>
                            <span className='underline decoration-[#EC407A]/50'>
                            Case Study {i+1} of {projects.length}: 
                            </span>{" "}
                            Netflix clone
                            </h4>
                            <p className='text-lg text-center md:text-left'>
                                Netflix 2.0 app that has a Log In and Log Out Authentication with Google.
                                It has a beautiful Home Screen with all the movies looking just like Netflix.
                                There is also a subscription page where you can see your active monthly 
                                subscription. We also use Stripe Payment for the monthly Netflix Subscription!
                            </p>
                    </div>
                </div>
            ))}
            {/* Projects */}
            {/* Projects */}
         </div>


        <div className='w-full absolute top-[30%] bg-[#EC407A]/30 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects
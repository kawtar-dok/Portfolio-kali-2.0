import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from 'next/link';
import { Social } from '../typing';
import { useRouter } from 'next/router';

type Props = {
  socials: Social[]
}

export default function Header({ socials }: Props){
  //const { locales} = useRouter();
  const router = useRouter();
  const { locale } = router;
 // const t = locale === 'en' ? en : fr;

  const changeLanguage = (e: { target: { value: any; }; }) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
        xl:items-center'>
        
       <motion.div 
        initial={{
          x:-500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x:0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
       className='flex flex-row items-center'>

        {/* Social Icons */} 
        {socials.map((social) => (
          <SocialIcon 
          key={social._id}
          url={social.url} fgColor="gray"
          bgColor="transparent" />
        
        
        ))}
       
       </motion.div>
          
       <motion.div
       initial={{
        x: 500,
        opacity: 0,
        scale: 0.5,
       }}
       animate={{
        x:0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
       className='flex flex-row items-center text-gray-300 cursor-pointer mr-2 '>
        <select id="underline_select" 
            onChange={changeLanguage}
            defaultValue={locale}
            className="block py-1 px-0 text-sm text-gray-500 mr-5
            bg-transparent border-0 border-b-2 border-gray-400 cursor-pointer
             appearance-none dark:text-gray-400 dark:border-gray-500 
             focus:outline-none focus:ring-0 focus:border-gray-400 peer">
              
               <option className="bg-[rgb(36,36,36)] hover:bg-[rgb(36,36,36)]
               border-gray-900 focus:bg-[rgb(36,36,36)] " 
                   value="en">EN</option>
               <option className="bg-[rgb(43,42,42)] hover:bg-[rgb(36,36,36)]
               border-gray-900 "
                   value="fr">FR</option>
               <option className="bg-[rgb(36,36,36)] hover:bg-[rgb(36,36,36)]
               border-gray-900 "
                   value="ar">AR</option>
            </select>
         
     
       <SocialIcon 
        className='cursor-pointer'
        network='email'
        fgColor="gray"
        url='#contact'
        bgColor="transparent" />
         <Link href="#contact">
             <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                Get In Touch
            </p>
            </Link>
       </motion.div>
    </header>
  )
}
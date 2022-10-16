import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity';
import { PageInfo } from '../typing';
import BackgroundCircles from './BackgroundCircles';

type Props = {
  pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
   const [text, count] = useTypewriter({
    words: [
      `Hi, the Name's ${pageInfo?.name}`,
      "Girl-who-loves-tea.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,

   });
  return ( 
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
      <BackgroundCircles />
      <img
      className='relative rounded-full h-32 w-32 mx-auto '
      src={urlFor(pageInfo?.heroImage).url()}
      alt='' />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          {pageInfo?.role}
        </h2>
        <h1 className='text-3xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#EC407A'/>
        </h1>

        <div className='pt-5'>
          <Link href={"#about"}>
          <button className='heroButton'>About</button>
          </Link>
          <Link href={"#experience"}>
          <button className='heroButton'>Experience</button>
          </Link>
          <Link href={"#skills"}>
          <button className='heroButton'>Skills</button>
          </Link>
          <Link href={"#projects"}>
          <button className='heroButton'>Projects</button>
          </Link>
          {/*
          <Link href={"#contact"}>
          <button className='heroButton'>Contact Me</button>
          </Link>
           */}
        </div>
      </div>
    </div>
  )
}
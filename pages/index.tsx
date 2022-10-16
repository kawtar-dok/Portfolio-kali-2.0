import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import { Experience, PageInfo, Project, Skill, Social } from '../typing'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocial'

type Props = {
   pageInfo: PageInfo;
   skills: Skill[];
   experiences: Experience[];
   projects: Project[];
   socials: Social[];

}

const Home = ({ pageInfo, experiences, skills, projects, socials}: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#EC407A]/80 '>
      <Head>
        <title>Kali's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header socials={socials} />
      
      {/* Hero*/}   
      <section id='hero' className='snap-start'>
       <Hero pageInfo={pageInfo}/>
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
      <About pageInfo={pageInfo}/>
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
      <WorkExperience experiences={ experiences }/>
      </section>

      {/* Skills */}  <section id="skills" className='snap-start'>
        <Skills skills={skills}/>
      </section>

      {/* Projects */}
      <section id="projects" className='snap-start'>
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
       

      <Link href="#hero">
        <footer className='sticky bottom-7  w-full cursor-pointer'>
           <div className='flex items-center justify-center'>
             <img 
             className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
             src='/kaw2.jpg'
             alt="" 
              />
           </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
   
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  let projects: Project[] = await fetchProjects();
  console.log(projects)
  const socials: Social[] = await fetchSocials();

return {
  props: {
    pageInfo,
    experiences,
    skills,
    projects,
    socials,
    },
    //Next/js will attempt to re-generate the page:
    // -when a request comes to
    // -at most once every 10 seconds
    revalidate: 10,
  }
}  
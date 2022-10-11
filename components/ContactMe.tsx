import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  email:string,
  subject:string,
  message:string,
}; 

type Props = {}

function ContactMe({}: Props) {
  const { register, handleSubmit} = 
   useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> =
  formData => {
    window.location.href =`mailto:kawtaritoujane@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}
    (${formData.email})`;
  };

  
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-2xl text-gray-500'>
         Contact 
        </h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                I have got just what you need.{" "}
                <span className='underline decoration-[#EC407A]/50'>Lets Talk </span> {"💕"}
            </h4>

            <div className='flex flex-col space-y-10'>
               <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-[#EC407A] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>+212 679032767</p>
               </div>
                
               <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#EC407A] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>kawtaritoujane@gmail.com</p>
               </div>

               <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-[#EC407A] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>Rabat Maroc</p>
               </div>   
           </div>

           <form 
           onSubmit={handleSubmit(onSubmit)}
           className='flex flex-col space-y-2 w-fit mx-auto'>
              <div className='flex space-x-2'>
                 <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
                 <input {...register('email')} placeholder="Email" className="contactInput" type="text" />
              </div>
              <input {...register('subject')}placeholder="Subject" className="contactInput" type="text" />
              <textarea {...register('message')}placeholder="Message" className="contactInput" />
              <button 
              type='submit'
              className='bg-[#EC407A] py-5 px-10 rounded-md text-black font-bold text-lg'>
                Submit
              </button>
           </form>
        </div>
    </div>
  )
}

export default ContactMe
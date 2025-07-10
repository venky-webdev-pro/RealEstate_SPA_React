import React from 'react'
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div  className='flex items-center justify-center flex-col  mx-auto p-14 md:px-20 lg:px-32  w-full overflow-hidden'>
      <h1 className='text-2xl font-bold mb-2'> About<span className=' underline underline-offset-4   decoration-1 font-light'>Our Brand</span></h1>
      <p className='text-gray-500  text-center mb-6 max-w-80'>Passionate About Properties, Dedicated to Your Vision </p>
      {/* // for apply this button  layourt // learn more  */}
      <div className='flex md:gap-20 flex-col md:flex-row items-center md:items-start'>  
        <img  className=" w-full md:w-96 sm:w-1/2 max-w-lg"src={ assets.brand_img} alt="" /> 
          <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
            <div className='grid grid-cols-2 gap-6 md:gap-10 w-full'>
              <div>
                <p className='text-4xl font-medium  text-gray-800'> 10  +</p>
                <p>Years of Excellence </p>
              </div>
              <div>
                <p className=' text-4xl font-medium text-gray-800'>12+</p>
                <p>Projects Completed</p>
              </div>
              <div>
                <p className=' text-4xl font-medium text-gray-800'>20+</p>
                <p>Mn. Sq. Ft. Delivered</p>
              </div>
              <div>
                <p className=' text-4xl font-medium text-gray-800'>25+</p>
                <p>Ongoing Projects</p>
              </div>
            </div>
            <p className='py-10 max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quibusdam ea nulla veritatis voluptatem? Error maxime sint aperiam laboriosam quo, totam corrupti voluptatibus accusamus quos exercitationem quam unde, nemo reiciendis.</p>
            <button className='bg-blue-600 text-white px-8 py-2 rounded-lg'>Learn more</button>
          </div>
        </div>
      </div>
    
  )
}

export default About;

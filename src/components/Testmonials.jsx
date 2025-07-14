import React from 'react'
import { assets, testimonialsData } from '../assets/assets';

const Testmonials = () => {
  return (
    <div className='mx-auto py-10 pt-20 px-6  lg:px-32 my-20 w-full overflow-hidden'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer{" "} <span className='underline underline-offset-4 decoration-1 font-light'>Testimonials</span></h1>
        <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto"> Real Stories from Those Who Found Home with Us</p>

         {/* // testimonial cards   */}
         <div className='flex flex-wrap justify-center gap-8'>
            { testimonialsData.map((testimonial,index)=>(
                <div key={ index} className='max-w-[340px] border shadow-lg rounded-lg px-8 py-12 text-center'>
                    <img src={testimonial.image} className='w-20 h-20 rounded-full mx-auto mb-4' alt="testimonial.alt" />
                    <h2 className='text-gray-700 text-xl font-medium'>{testimonial.name }</h2>
                    <p className='text-gray-500'>{testimonial.title }</p>
                    <div className='flex justify-center  gap-1 m-5'>
                        {/* { Array.from({length:testimonial.rating},(item,index)=>(<img key={index} src={assets.star_icon} alt="" /> ))} */}
                        {Array.from({ length: testimonial.rating }).map((item, index) => (
                <img key={index} src={assets.star_icon} alt="" />
 ))}
 

                        {/* <p> {testimonial.rating}</p> */}
                    </div>
                    <p className='text-gray-600 '>{ testimonial.text}</p>
                </div>

            )

            )}

         </div>
    </div>
   
    

  )
}

export default Testmonials ;
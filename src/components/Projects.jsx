import React from 'react'
import { assets, projectsData } from '../assets/assets';

const Projects = () => {
  return (
<div className="mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces, Building Legacies—Explore Our Portfolio
      </p>
      {/* slider buttons */}
      <div className="flex justify-end items-center mb-8">
        <button  className="p-3  bg-gray-200 rounded mr-2 cursor-pointer" aria-label="Previous Project">
          <img src={assets.left_arrow} alt="Previous" />
        </button>
         <button  className="p-3 bg-gray-200 rounded mr-2 cursor-pointer" aria-label="Next Project">
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>
      {/* projets slides container  */}
      <div>
        <div>
            <div className='flex gap-8 transition-transform  duration-500 ease-in-out'>
  {projectsData?.map((Project, index) => (
    <div key={index}  className='w-full shrink-0 sm:w-1/4  relative'>
      <img  className="w-full h-auto mb-14"src={Project?.image} alt={Project.title} />
      <div className='flex justify-center absolute left-0 bottom-5 right-0 '>
      <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'> 
        <h2 className='text-xl font-semibold text-gray-800'>{Project.title}</h2>
        <p className='text-gray-500 text-sm'>{Project.price}<span className='px-1'>|{ Project.location} </span></p>
</div>
      </div>
    </div>
  ))}
</div>
        </div>
      </div>



</div>
  )
}

export default Projects;
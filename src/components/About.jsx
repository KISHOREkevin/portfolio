import React from 'react'

const About = () => {
  return (
    <div id='about' className='lg:h-[100vh] h-[92vh] lg:mt-[-65px] mt-[-48px] flex justify-center items-center overflow-hidden border-solid border-2 border-white rounded-md'>
    <div className='flex lg:space-x-10 flex-wrap justify-center  '>
        <div>
            <img className=' rounded-full' src={"assets/profile.jpg"} alt="profile" width={300} />
        </div>
        <div className='my-20 text-center lg:text-start'>
            <h1 className='text-6xl font-bold text-ctp-rosewater'>I'm Kishore</h1>
            <h3 className='text-3xl font-bold text-ctp-rosewater'>Fullstack developer</h3>
            <p className='lg:text-xl text-[15px] mt-2 '>Linux enthusiast | I use Arch Linux <i className="devicon-archlinux-plain colored"></i> btw</p>
        <a href="/assets/resume.pdf" download><button className='bg-ctp-blue text-xl text-black p-2 mt-2 rounded-md w-full'>My Resume</button></a>  
      </div>
    </div>
    </div>
  )
}

export default About

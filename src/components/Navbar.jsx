import React from 'react'


const Navbar = () => {
    return (
        <div className='sticky top-0 lg:top-1 mx-2 z-10  lg:shadow-md rounded-md overflow-hidden '>
            <div className="drawer z-20 lg:hidden">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                
                <div className="drawer-content">
                
                    <label htmlFor="my-drawer" className="  btn bg-ctp-yellow text-ctp-surface0 drawer-button"><i class='bx bx-menu'></i></label>
                </div>
                <div className="drawer-side">
               
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    
                    <ul className="menu bg-transparent backdrop-blur-lg text-ctp-yellow min-h-full w-80 p-4">
                    <a href='/' className='btn btn-ghost mx-3 text-3xl font-bold text-ctp-yellow '>My Portfolio</a>
                    <li><a href="#about" className='btn btn-ghost'>About</a></li>
                        <li><a href="#skills" className='btn btn-ghost'>Skills</a></li>
                        <li><a href="#project" className='btn btn-ghost'>Projects</a></li>
                        <li><a href="#credit" className='btn btn-ghost'>Credits</a></li>
                        <li><a href="#intrest" className='btn btn-ghost'>Intrests</a></li>
                        <li><a href="#contact" className='btn btn-ghost'>Contact me</a></li>
                    </ul>
                  
                </div>
                 
            </div>
            <div className='hidden lg:flex navbar bg-transparent backdrop-blur-lg '>
                <img src="star.ico" alt="logo" width={20} />
                <div className='flex-1'>

                    <a href='/' className='btn btn-ghost mx-3 text-3xl font-bold text-ctp-yellow '>My Portfolio</a>
                </div>
                <div className=' flex-0 text-ctp-yellow'>
                    <ul className='flex space-x-2'>
                        <li><a href="#about" className='btn btn-ghost'>About</a></li>
                        <li><a href="#skills" className='btn btn-ghost'>Skills</a></li>
                        <li><a href="#project" className='btn btn-ghost'>Projects</a></li>
                        <li><a href="#credit" className='btn btn-ghost'>Credits</a></li>
                        <li><a href="#intrest" className='btn btn-ghost'>Intrests</a></li>
                        <li><a href="#contact" className='btn btn-ghost'>Contact me</a></li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Navbar

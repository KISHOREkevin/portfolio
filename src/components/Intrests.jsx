import React, { useState } from 'react'

const Intrests = () => {
    let [tabChoice,setTabchoice] = useState(1);
  return (
    <div id='intrest' className=' flex items-center justify-center overflow-hidden border-solid border-2 border-white rounded-md'>
         <div className=' lg:mt-20 mt-10' >
        {tabChoice === 1 ?
          <>
          <div className='lg:space-x-5 flex justify-center '>
            <button className='btn btn-primary bg-ctp-blue text-ctp-surface0 lg:text-xl' type="button" onClick={() => setTabchoice(1)} >Linux config</button>
            <button className='btn btn-ghost text-ctp-yellow lg:text-xl' type="button" onClick={() => setTabchoice(2)} >Reading Hobby</button>
            <button className='btn btn-ghost text-ctp-yellow lg:text-xl' type="button" onClick={() => setTabchoice(3)}>Anime</button>
            
          </div>
           <div className='p-10 m-3  bg-ctp-surface0 rounded-md shadow-md'>
                <div className='m-3'>
                    <h1 className='text-center text-2xl text-ctp-yellow'>Configuring the linux and learning CLIs</h1>
                    <div className='lg:flex mt-5 lg:space-x-5'>
                    <ul className='list-disc lg:text-xl text-ctp-rosewater '>
                        <li>Learning new command line tools.</li>
                        <li>Configuring my operating system like window manager, bars,system controllers ...</li>
                        <li>Script writing like volumecontroller,backlight management ...</li>
                        <li>Love to use open source tools</li>
                        <li>Trying out new framework in free time.</li>
                        <li>I use Arch linux , BTW</li>
                    </ul>
                
                <div className='flex-grow'>
                   
                    <img src="assets/intrests/clitools.png" alt="CLI" />
                </div>
                </div>  
                </div>
           </div>
          </>
          :
          null
        }
        {tabChoice === 2 ?
          <>
          <div className='lg:space-x-5 flex justify-center '> 
          <button className='btn btn-ghost text-ctp-yellow  lg:text-xl' type="button" onClick={() => setTabchoice(1)} >Linux config</button>
            <button className='btn btn-primary bg-ctp-blue text-ctp-surface0 lg:text-xl' type="button" onClick={() => setTabchoice(2)} >Reading Hobby</button>
            <button className='btn btn-ghost text-ctp-yellow lg:text-xl' type="button" onClick={() => setTabchoice(3)}>Anime</button>
           
          </div>
          <div className='p-10 m-3  bg-ctp-surface0 rounded-md shadow-md'>
                <div className='m-3'>
                    <h1 className='text-center text-2xl text-ctp-yellow'>Book Reading</h1>
                    <div className='lg:flex mt-5 space-x-5'>
                    <ul className='list-disc text-xl text-ctp-rosewater '>
                        <li>In free time , most of the hobbies mostly coding and book reading</li>
                        <li>love in history and technical books</li>
                        <li>Favourite author simon singh and Isaac Walterson</li>
                        <li>Some of the linux experience are gathered from books like CLIs</li>
                    </ul>
                
                <div className='flex-grow'>
                   
                    <img src="assets/intrests/codebook.jpg" alt="Book" />
                </div>
                </div>  
                </div>
           </div>
       
          </>
          : null}
        {tabChoice === 3 ?
          <>
          <div className='lg:space-x-5 flex justify-center'>
            <button className='btn btn-ghost text-ctp-yellow lg:text-xl ' type="button" onClick={() => setTabchoice(1)} >Linux config</button>
            <button className='btn btn-ghost text-ctp-yellow lg:text-xl ' type="button" onClick={() => setTabchoice(2)} >Reading Hobby</button>
            <button className='btn btn-primary  lg:text-xl bg-ctp-blue text-ctp-surface0' type="button" onClick={() => setTabchoice(3)}>Anime</button>
            
            </div>
            <div className='p-10 m-3  bg-ctp-surface0 rounded-md shadow-md'>
                <div className='m-3'>
                    <h1 className='text-center text-2xl text-ctp-yellow'>Meantime anime</h1>
                    <div className='lg:flex mt-5 lg:space-x-5'>
                    <ul className='list-disc text-xl text-ctp-rosewater '>
                        <li>Watching anime on weekends</li>
                        <li>And Movies also ...</li>
                        <li>Favourite genres mystery , horror , and suspense and action</li>
                    </ul>
                
                <div className=''>
                   
                    <img width={700} src="assets/intrests/aot.jpg" alt="anime" />
                </div>
                </div>  
                </div>
           </div>
          </>
          : null}
       
      </div>
    </div>
  )
}

export default Intrests

import React from 'react'
import { badges, credits } from '../utils/credit.js'

const Credit = () => {
  return (
    <div id="credit" className='h-[100vh]  flex items-center justify-center overflow-hidden border-solid border-2 border-white rounded-md'>
      <div className='bg-ctp-surface0 p-2 rounded-md  lg:mt-[50px] m-2 lg:mx-10 overflow-scroll lg:h-[530px] h-[700px]'>
        <div className='flex flex-wrap justify-center'>
        {credits.map((credit) => {
          return (
            
              <div key={credit.id}>
                <div className='hover:translate-y-[-8px] transition-all relative flex justify-center items-center'>
                  <img className='m-2 rounded-md'  width={400} src={credit.creditimg} alt={credit.creditname} />
                  <div className='opacity-80 absolute hover:opacity-100'>
                  <a href={credit.creditimg} target='_blank' className=' btn btn-primary '>{credit.creditname}</a>
                  </div>
                  
                </div>


              </div>
          
          )
        })}
        
        </div>
        <div className='border-2 border-ctp-base m-2 rounded-md'>
          <h1 className='text-ctp-rosewater text-center text-3xl underline underline-offset-2 '>Badges</h1>
          <div className='flex flex-wrap justify-center'>
        {badges.map((credit) => {
          return (
            
              <div key={credit.id}>
                <div className='hover:translate-y-[-8px] transition-all relative flex justify-center items-center'>
                  <img className='m-2 rounded-md'  width={200} src={credit.creditimg} alt={credit.creditname} />
                  
                  
                </div>


              </div>
          
          )
        })}
        
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Credit
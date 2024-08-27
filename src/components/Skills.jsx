import React, { useState } from 'react'
import { frontendTools, backendTools, miscTools, languagesKnown } from '../utils/skills.js';
const Skills = () => {
  let [tabChoice, setTabchoice] = useState(1);

  return (
    <div id='skills' className='h-[100vh] flex justify-center lg:overflow-hidden overflow-scroll border-solid border-2 border-white rounded-md  '>
      <div className=' lg:mt-32 mt-11'>
        {tabChoice === 1 ?
          <>
           
            <div className='space-x-5 lg:flex hidden justify-center '>
              <button className='btn btn-primary bg-ctp-blue text-ctp-surface0 text-xl' type="button" onClick={() => setTabchoice(1)} >Frontend Skills</button>
              <button className='btn btn-ghost text-ctp-yellow text-xl' type="button" onClick={() => setTabchoice(2)} >Backend Skills</button>
              <button className='btn btn-ghost text-ctp-yellow text-xl' type="button" onClick={() => setTabchoice(3)}>Misc Skills </button>
              <button className='btn btn-ghost text-ctp-yellow text-xl' type="button" onClick={() => setTabchoice(4)}>Languages</button>
            </div>
            <details className="dropdown lg:hidden inline-block">
              <summary className="btn btn-primary m-1">Click to show other skills</summary>
              <ul className="menu dropdown-content bg-base-100 text-ctp-yellow rounded-box z-[1] w-52 p-2 shadow">
              <button className='btn btn-primary bg-ctp-blue text-ctp-surface0 ' type="button" onClick={() => setTabchoice(1)} >Frontend Skills</button>
              <button className='btn btn-ghost text-ctp-yellow ' type="button" onClick={() => setTabchoice(2)} >Backend Skills</button>
              <button className='btn btn-ghost text-ctp-yellow ' type="button" onClick={() => setTabchoice(3)}>Misc Skills </button>
              <button className='btn btn-ghost text-ctp-yellow ' type="button" onClick={() => setTabchoice(4)}>Languages</button>
              </ul>
            </details>
            <div className='p-10 m-3  lg:w-[800px] bg-ctp-surface0 rounded-md shadow-md'>
              <div className=' flex flex-wrap ' >
                {frontendTools.map((skill) => {
                  return (
                    <div key={skill.id} className='m-5 flex item-center space-x-2' >
                      <img className='inline-block' src={skill.skillimg} alt={skill.skillname} width={50} />
                      <h2 className='text-xl font-bold text-ctp-yellow'>{skill.skillname}</h2>
                    </div>
                  )
                })}

              </div>
            </div>
          </>
          :
          null
        }
        {tabChoice === 2 ?
          <>
            <div className='space-x-5 lg:flex hidden justify-center '>
              <button className='btn btn-ghost text-ctp-yellow  text-xl' type="button" onClick={() => setTabchoice(1)} >Frontend Skills</button>
              <button className='btn btn-primary bg-ctp-blue text-ctp-surface0 text-xl' type="button" onClick={() => setTabchoice(2)} >Backend Skills</button>
              <button className='btn btn-ghost text-ctp-yellow text-xl' type="button" onClick={() => setTabchoice(3)}>Misc Skills</button>
              <button className='btn btn-ghost text-ctp-yellow text-xl' type="button" onClick={() => setTabchoice(4)}>Languages</button>
            </div>
            <details className="dropdown lg:hidden inline-block">
              <summary className="btn btn-primary m-1">Click to show other skills</summary>
              <ul className="menu dropdown-content bg-base-100 text-ctp-yellow rounded-box z-[1] w-52 p-2 shadow">
              <button className='btn btn-ghost text-ctp-yellow ' type="button" onClick={() => setTabchoice(1)} >Frontend Skills</button>
              <button className='btn btn-primary bg-ctp-blue text-ctp-surface0' type="button" onClick={() => setTabchoice(2)} >Backend Skills</button>
              <button className='btn btn-ghost text-ctp-yellow' type="button" onClick={() => setTabchoice(3)}>Misc Skills</button>
              <button className='btn btn-ghost text-ctp-yellow' type="button" onClick={() => setTabchoice(4)}>Languages</button>
              </ul>
            </details>
            <div className='p-10 m-3 lg:w-[800px] lg:h-80 h-[800px] bg-ctp-surface0  rounded-md shadow-md'>
              <div className=' flex flex-wrap ' >
                {backendTools.map((skill) => {
                  return (
                    <div className='m-5 flex item-center space-x-2' key={skill.id}>
                      <img className='inline-block' src={skill.skillimg} alt={skill.skillname} width={50} />
                      <h2 className='text-xl font-bold text-ctp-yellow'>{skill.skillname}</h2>
                    </div>
                  )
                })}

              </div>
            </div>
          </>
          : null}
        {tabChoice === 3 ?
          <>
            <div className='space-x-5 lg:flex hidden justify-center'>
              <button className='btn btn-ghost text-ctp-yellow text-xl ' type="button" onClick={() => setTabchoice(1)} >Frontend Skills</button>
              <button className='btn btn-ghost text-ctp-yellow text-xl ' type="button" onClick={() => setTabchoice(2)} >Backend Skills</button>
              <button className='btn btn-primary  text-xl bg-ctp-blue text-ctp-surface0' type="button" onClick={() => setTabchoice(3)}>Misc Skills</button>
              <button className='btn btn-ghost text-ctp-yellow text-xl ' type="button" onClick={() => setTabchoice(4)}>Languages</button>
            </div>
            <details className="dropdown lg:hidden inline-block">
              <summary className="btn btn-primary m-1">Click to show other skills</summary>
              <ul className="menu dropdown-content bg-base-100 text-ctp-yellow rounded-box z-[1] w-52 p-2 shadow">
              <button className='btn btn-ghost text-ctp-yellow' type="button" onClick={() => setTabchoice(1)} >Frontend Skills</button>
              <button className='btn btn-ghost text-ctp-yellow' type="button" onClick={() => setTabchoice(2)} >Backend Skills</button>
              <button className='btn btn-primary bg-ctp-blue text-ctp-surface0' type="button" onClick={() => setTabchoice(3)}>Misc Skills</button>
              <button className='btn btn-ghost text-ctp-yellow' type="button" onClick={() => setTabchoice(4)}>Languages</button>
              </ul>
            </details>
            <div className='p-10 m-3 lg:w-[800px] bg-ctp-surface0 rounded-md shadow-md'>
              <div className=' flex flex-wrap ' >
                {miscTools.map((skill) => {
                  return (
                    <div className='m-5 flex item-center space-x-2' key={skill.id}>
                      <img className='inline-block' src={skill.skillimg} alt={skill.skillname} width={50} />
                      <h2 className='text-xl font-bold text-ctp-yellow'>{skill.skillname}</h2>
                    </div>
                  )
                })}

              </div>
            </div>
          </>
          : null}
        {tabChoice === 4 ?
          <>
            <div className='space-x-5 lg:flex hidden justify-center'>
              <button className='btn btn-ghost text-ctp-yellow text-xl ' type="button" onClick={() => setTabchoice(1)} >Frontend Skills</button>
              <button className='btn btn-ghost text-ctp-yellow text-xl ' type="button" onClick={() => setTabchoice(2)} >Backend Skills</button>
              <button className='btn btn-ghost text-ctp-yellow text-xl ' type="button" onClick={() => setTabchoice(3)}>Misc Skills</button>
              <button className='btn btn-primary bg-ctp-blue  text-xl text-ctp-surface0' type="button" onClick={() => setTabchoice(4)}>Languages</button>
            </div>
            <details className="dropdown lg:hidden inline-block">
              <summary className="btn btn-primary m-1">Click to show other skills</summary>
              <ul className="menu dropdown-content bg-base-100 text-ctp-yellow rounded-box z-[1] w-52 p-2 shadow">
              <button className='btn btn-ghost text-ctp-yellow  ' type="button" onClick={() => setTabchoice(1)} >Frontend Skills</button>
              <button className='btn btn-ghost text-ctp-yellow  ' type="button" onClick={() => setTabchoice(2)} >Backend Skills</button>
              <button className='btn btn-ghost text-ctp-yellow  ' type="button" onClick={() => setTabchoice(3)}>Misc Skills</button>
              <button className='btn btn-primary bg-ctp-blue   text-ctp-surface0' type="button" onClick={() => setTabchoice(4)}>Languages</button>
              </ul>
            </details>
            <div className='p-10 m-3 lg:w-[800px] bg-ctp-surface0 rounded-md shadow-md'>
              <div className=' flex flex-wrap ' >
                {languagesKnown.map((skill) => {
                  return (
                    <div className='m-5 flex item-center space-x-2' key={skill.id}>
                      <img className='inline-block' src={skill.skillimg} alt={skill.skillname} width={50} />
                      <h2 className='text-xl font-bold text-ctp-yellow'>{skill.skillname}</h2>
                    </div>
                  )
                })}

              </div>
            </div>
          </>
          : null}
      </div>

    </div>
  )
}

export default Skills

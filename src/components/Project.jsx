import React, { useState } from 'react'
import { bigProjects, smallProjects } from '../utils/projects.js';

const Project = () => {
    let [tabChoice, setTabchoice] = useState(1);
    return (
        <div id='project' className='h-[100vh] flex justify-center overflow-hidden border-solid border-2 border-white rounded-md  '>
            <div className='lg:mt-20 mt-10' >
                {tabChoice === 1 ?
                    <>
                        <div className='space-x-5 flex justify-center'>
                            <button className='btn btn-primary  bg-ctp-blue text-ctp-surface0 lg:text-xl' type="button" onClick={() => setTabchoice(1)} >Big Projects</button>
                            <button className='btn btn-ghost  text-ctp-yellow lg:text-xl' type="button" onClick={() => setTabchoice(2)} >Small Projects</button>
                        </div>

                        <div className=' flex flex-wrap justify-center  mx-10 overflow-scroll lg:h-[480px] h-[700px] ' >
                            {bigProjects.map((project) => {
                                return (
                                    <div className='m-2 ' key={project.id}>
                                        <a href={project.projectlink} target='_blank'>
                                            <div className=" hover:bg-ctp-blue hover:text-ctp-surface0 hover:border-2 hover:border-ctp-yellow transition-all card p-5 bg-ctp-surface0 lg:w-[400px] w-[330px] lg:h-72 h-60 shadow-xl text-ctp-yellow text-center">
                                                <figure>
                                                    <img
                                                        height={300}
                                                        src={project.projectimg}
                                                        alt={project.projectname} />
                                                </figure>
                                                <div className="mt-5">
                                                    <h2 className="text-xl" >{project.projectname } <i className="fa-solid fa-up-right-from-square"></i></h2>
                                                </div>
                                            </div>
                                        </a>
                                       
                                    </div>
                                )
                            })}

                        </div>

                    </>
                    :
                    <>
                        <div className='space-x-5 flex justify-center'>
                            <button className='btn btn-ghost text-ctp-yellow lg:text-xl' type="button" onClick={() => setTabchoice(1)} >Big Projects</button>
                            <button className=' btn btn-primary bg-ctp-blue text-ctp-surface0 lg:text-xl' type="button" onClick={() => setTabchoice(2)} >Small projects</button>
                        </div>
                        <div className=' flex flex-wrap justify-center  mx-10 overflow-scroll lg:h-[480px] h-[700px]' >
                            {smallProjects.map((project) => {
                                return (
                                    <div className='m-2' key={project.id}>
                                        <a href={project.projectlink} target='_blank'>
                                            <div className="hover:border-2 hover:border-ctp-yellow hover:bg-ctp-blue hover:text-ctp-surface0 transition-all card p-5 bg-ctp-surface0 lg:w-[400px] w-[330px] lg:h-72 h-60  shadow-xl text-ctp-yellow text-center">
                                                <figure>
                                                    <img
                                                        height={300}
                                                        src={project.projectimg}
                                                        alt={project.projectname} />
                                                </figure>
                                                <div className="mt-5">
                                                    <h2 className="text-xl" >{project.projectname} <i className="fa-solid fa-up-right-from-square"></i></h2>
                                                </div>
                                            </div>
                                        </a>
                                       
                                    </div>
                                )
                            })}

                        </div>

                    </>
                }
            </div>
        </div>
    )
}

export default Project

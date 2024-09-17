
import React from 'react';
import ProjectsData from '../Projects.json';

const Projects = () => {
  return (
    <div className='mt-20'>
        <h2 className='text-2xl font-bold ml-10'>Projects & Accomplishments</h2>
        {ProjectsData.map((project, index) => (
            <div key={index} className='ml-10 text-[14px] mr-5 my-5 cursor-pointer opacity-70'>
              <hr className='my-2 opacity-60 bg-white'/>
            <h3 className='text-[15px] font-bold'>{project.title}</h3>
            <p className='mt-2'>{project.description}</p>
            <p className='mt-2 text-[13px] opacity-70'>
              <strong>Technologies Used:</strong> {project.technologies.join(', ')}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Projects;

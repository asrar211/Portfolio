import React from 'react'

const Tech = () => {
  return (
    <div className='mt-20'>
        <h2 className='text-2xl font-bold ml-10'>Tech Stack</h2>
        <div className='flex flex-wrap gap-2 ml-10 mt-5'>
        <div className='border-[1px] border-white/20 py-3 px-3 rounded-md'>
            <h2 className='font-semibold text-[17px] my-2'>Languages</h2>
            <p className='text-[13px] opacity-70'>Typescript, C++, Dart, Python</p>
        </div>
        <div className='border-[1px] border-white/20 py-4 px-3 rounded-md'>
            <h2 className='font-semibold text-[17px] my-2'>Backend Tech</h2>
            <p className='text-[13px] opacity-70'>Express, NodeJS, NextJS, Firebase</p>
        </div>
        <div className='border-[1px] border-white/20 py-4 px-3 rounded-md'>
            <h2 className='font-semibold text-[17px] my-2'>Frontend Tech</h2>
            <p className='text-[13px] opacity-70'>ReactJS, NextJS, TailwindCSS</p>
        </div>
        <div className='border-[1px] border-white/20 py-4 px-3 rounded-md'>
            <h2 className='font-semibold text-[17px] my-2'>Mobile Tech</h2>
            <p className='text-[13px] opacity-70'>Flutter, Hive</p>
        </div>
        <div className='border-[1px] border-white/20 py-4 px-3 rounded-md'>
            <h2 className='font-semibold text-[17px] my-2'>Databases</h2>
            <p className='text-[13px] opacity-70'>Postgres, MongoDB, MySQL</p>
        </div>
        <div className='border-[1px] border-white/20 py-4 px-3 rounded-md'>
            <h2 className='font-semibold text-[17px] my-2'>Tools</h2>
            <p className='text-[13px] opacity-70'>VS Code, Git, Github, Postman</p>
        </div>
        <div className='border-[1px] border-white/20 py-4 px-3 rounded-md'>
            <h2 className='font-semibold text-[17px] my-2'>Cloud & Hosting</h2>
            <p className='text-[13px] opacity-70'>AWS, Google Cloud, VPS, Heroku</p>
        </div>
        <div className='border-[1px] border-white/20 py-4 px-3 rounded-md'>
            <h2 className='font-semibold text-[17px] my-2'>Design</h2>
            <p className='text-[13px] opacity-70'>Figma, Framer, Webflow</p>
        </div>
        </div>
    </div>
  )
}

export default Tech
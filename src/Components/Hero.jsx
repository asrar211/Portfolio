import Image from '../assets/portfolio.jpeg'

const Hero = () => {
  return (
  <div>
        <div className='flex flex-col gap-10 justify-center items-center pt-10'>
          <img src={Image} className={`shadow-2xl shadow-black w-[200px] h-[200px] object-cover rounded-full`} />
          <h1 className='text-[2rem] mt-5 font-bold tracking-wider'>Mohammad Asrar</h1>
        </div>
        <div className='ml-10 pt-10'>
          <p className='font-light text-[15px]'>Full-Stack Developer & Designer</p>
          <p className='mt-5 text-[15px]'>aliasrar84@gmail.com</p>
        </div>
        <div>
          <ul className='flex justify-center gap-16 mt-20 font-light cursor-pointer'>
            <li>LinkedIn</li>
            <li>Github</li>
            <li>Resume</li>
          </ul>
        </div>
    </div>
  )
}

export default Hero
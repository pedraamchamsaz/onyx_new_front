import { Titan_One } from 'next/font/google'
import { Sedgwick_Ave_Display } from 'next/font/google'

const titan_one = Titan_One({ 
  weight: '400',
  subsets: ['latin'] 
})

const sedgwick = Sedgwick_Ave_Display({ 
  weight: '400',
  subsets: ['latin'] 
})

const Hero = () => {
  return (
    <div className='flex xl:flex-row flex-col z-0 max-w-[1440px] mx-auto'>
      <div className='flex-1 pt-36 px-6 sm:px-16'>
        <h1 className={`${titan_one.className} 2xl:text-9xl text-8xl font-extrabold text-orange-600`}>
          You've got plans
        </h1>
        <p className={`${sedgwick.className} mt-5 sm:text-4xl text-orange-600`}>
          Find hundreds of online events
        </p>
      </div>
      <div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Hero
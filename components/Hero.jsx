import { Titan_One } from 'next/font/google'
import { Sedgwick_Ave_Display } from 'next/font/google'
import Image from 'next/image'

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
    <div className='pt-24 flex xl:flex-row flex-col z-0 max-w-[1440px] mx-auto items-center'>
      <div className='flex-1 px-6 sm:px-16'>
        <h1 className={`${titan_one.className} xl:text-left text-center text-9xl font-extrabold text-orange-600`}>
          You've got plans
        </h1>
      </div>

      <div>
        <div>
          <Image 
            src='/hero_image.png'
            width={500}
            height={500}
            alt="Hero Image"
            className=''
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
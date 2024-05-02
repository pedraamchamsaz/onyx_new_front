import { titan_one } from '@/constants/fonts'
import { madimi_one } from '@/constants/fonts'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
  return (
    <div className='pt-24 flex xl:flex-row flex-col z-0 max-w-[1440px] mx-auto items-center'>
      <div className='flex flex-col gap-16 flex-1 px-6 sm:px-16'>
        <h1 className={`${titan_one.className} xl:text-left text-center text-9xl font-extrabold text-orange-600`}>
          You've got plans
        </h1>
        <CustomButton 
          buttonStyles={`${madimi_one.className} text-lg bg-orange-400 hover:bg-orange-300 border-4 border-orange-600 rounded-full px-6 py-4 max-w-[200px] max-xl:mx-auto max-xl:mb-10 hover:scale-105 transition`}
          buttonText="Explore Events"
        />
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
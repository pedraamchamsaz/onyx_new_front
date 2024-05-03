import Logo from './Logo'
import Image from 'next/image'
import { Titan_One } from 'next/font/google'
import NavItems from './NavItems'

const titan_one = Titan_One({ 
  weight: '400',
  subsets: ['latin'] 
})

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='px-6 lg:px-16 py-4 flex justify-between items-center'>
        <Logo />
        <div className={`${titan_one.className} hidden md:flex box-content`}>
          <NavItems 
            classStyles='flex gap-20'
            itemStyles="hover:border-b-4 hover:border-orange-600 hover:scale-110 transition border-b-4 border-black/0"
          />
        </div>
        <div className='flex gap-10 items-center'>
          <span className="material-symbols-outlined text-black/70 md:invisible scale-[1.7]">menu</span>
          <Image 
            src='/pic.png'
            width={60}
            height={60}
            alt='login picture'
            className='rounded-full object-cover'
          />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
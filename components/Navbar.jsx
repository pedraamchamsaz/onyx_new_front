import Logo from './Logo'
import Image from 'next/image'
import Link from 'next/link'
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
        <div className={`${titan_one.className} hidden md:flex gap-20`}>
          <NavItems />
          {/* <Link href='/'>Create Event</Link>
          <Link href='/'>Profile</Link>
          <Link href='/'>Settings</Link> */}
        </div>
        <div className='flex gap-5'>
          <Image 
            src='/hamburger.svg'
            width={60}
            height={60}
            className='md:hidden'
          />
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
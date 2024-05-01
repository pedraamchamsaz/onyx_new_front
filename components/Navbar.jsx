import Logo from './Logo'
import Image from 'next/image'
import Link from 'next/link'
import { Titan_One } from 'next/font/google'

const titan_one = Titan_One({ 
  weight: '400',
  subsets: ['latin'] 
})

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='px-6 sm:px-16 py-4 flex justify-between items-center'>
        <Logo />
        <div className={`${titan_one.className} flex gap-20`}>
          <Link href='/'>Create Event</Link>
          <Link href='/'>Profile</Link>
          <Link href='/'>Settings</Link>
        </div>
        <Image 
          src='/pic.png'
          width={60}
          height={60}
          alt='login picture'
          className='rounded-full'
        />
      </nav>
    </header>
  )
}

export default Navbar
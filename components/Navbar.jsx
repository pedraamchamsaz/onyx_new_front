import Logo from './Logo'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='px-6 sm:px-16 py-4 flex justify-between items-center'>
        <Logo />
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
import Link from 'next/link'
import { Bungee_Shade } from 'next/font/google'

const bungee_shade = Bungee_Shade({ 
  weight: '400',
  subsets: ['latin'] 
})

const Logo = () => {
  return (
    <div className={bungee_shade.className}>
        <Link href='/'>
            <div className='text-5xl text-red-600'>ONYX</div>
        </Link>
    </div>
  )
}

export default Logo
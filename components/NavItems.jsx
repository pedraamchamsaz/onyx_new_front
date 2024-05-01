import { headerLinks } from '@/constants'
import Link from 'next/link'

const NavItems = () => {
  return (
    <ul className='flex flex-col md:flex-row md:gap-20'>
        {headerLinks.map((link) => {
            return (
                <li
                    key={link.route}    
                >
                    <Link href={link.route}>{link.label}</Link>
                </li>
            )
        })}
    </ul>
  )
}

export default NavItems
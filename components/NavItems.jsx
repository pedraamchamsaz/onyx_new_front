import { headerLinks } from '@/constants'
import Link from 'next/link'

const NavItems = ({classStyles, itemStyles}) => {
  return (
    <ul className={`${classStyles}`}>
        {headerLinks.map((link) => {
            return (
                <li
                    key={link.route}
                    className={`${itemStyles}`}
                >
                    <Link href={link.route}>{link.label}</Link>
                </li>
            )
        })}
    </ul>
  )
}

export default NavItems
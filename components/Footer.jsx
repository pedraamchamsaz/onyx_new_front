import Link from "next/link"
import Logo from "./Logo"
import { footerLinks } from "@/constants"
import { titan_one } from "@/constants/fonts"
import { madimi_one } from "@/constants/fonts"

const Footer = () => {
  return (
    <footer className={`${madimi_one.className} bg-black text-white`}>
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col gap-6">
          <Logo />
          <p>
            2024 Onyx <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="flex flex-1 w-full md:justify-end max-md:mt-10 gap-12 text-lg flex-wrap">
          {footerLinks.map((link) => (
            <div key={link.title} className="flex flex-col gap-4 min-w-[170px]">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500 hover:text-gray-300"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 py-10 sm:px-16 px-6 border-t">
        <p>&copy; 2024 Onyx. All rights reserved.</p>
        <div className="flex gap-10">
          <Link href='/'>Privacy Policy</Link>
          <Link href='/'>Terms of Use</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
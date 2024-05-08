import Logo from "./Logo";
import Image from "next/image";
import { Titan_One } from "next/font/google";
import NavItems from "./NavItems";
import {
  RegisterLink,
  LoginLink,
  LogoutLink
} from "@kinde-oss/kinde-auth-nextjs/components";
import { headerLinks } from "@/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const titan_one = Titan_One({
  weight: "400",
  subsets: ["latin"],
});
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

const Navbar = () => {

  const { user } = useKindeBrowserClient();

  return (
    <header className="w-full absolute z-10">
      <nav className="px-6 lg:px-16 py-4 flex justify-between items-center">
        <Logo />
        <div className={`${titan_one.className} hidden md:flex box-content`}>
          <NavItems
            classStyles="flex gap-20"
            itemStyles="hover:border-b-4 hover:border-orange-600 hover:scale-110 transition border-b-4 border-black/0"
          />
        </div>
        <div className="flex gap-10 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <span className="material-symbols-outlined text-black/70 md:invisible scale-[1.7]">
                menu
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {headerLinks.map((link) => (
                <DropdownMenuItem key={link.label}>
                  {link.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger>
              {user?.picture ? 
                (<Image
                src={`${user.picture}`}
                width={60}
                height={60}
                alt="login picture"
                className="rounded-full object-cover"
              />
            ) : (
              <span className="material-symbols-outlined text-black/70 scale-[2.2]">
                account_circle
              </span>
            )
            }
            </DropdownMenuTrigger>

            {!user ? (
            <DropdownMenuContent>
              {/* <DropdownMenuItem>
                <LoginLink>Profile</LoginLink>
              </DropdownMenuItem>
              <DropdownMenuSeparator /> */}
              <DropdownMenuItem>
                <LoginLink>Log In</LoginLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <RegisterLink>Sign Up</RegisterLink>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href='/'>Settings</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
            ) : 
            (
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogoutLink>Log Out</LogoutLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
              )
          }

          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

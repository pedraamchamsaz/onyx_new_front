import Logo from "./Logo";
import Image from "next/image";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  const { user } = useKindeBrowserClient();
  const { toast } = useToast();

  return (
    <header className="w-full absolute z-10">
      <nav className="px-6 lg:px-16 py-4 flex justify-between">
        <Logo />
        {/* <div className={`${titan_one.className} hidden md:flex box-content`}>
          <NavItems
            classStyles="flex gap-20"
            itemStyles="hover:border-b-4 hover:border-orange-600 hover:scale-110 transition border-b-4 border-black/0"
          />
        </div> */}

        <div className="flex items-center gap-10">
          {user ? (
            <Link href="/create" className="max-md:hidden" target="_blank">
              <CustomButton
                buttonStyles="text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-full px-6 py-3 max-w-[200px] hover:scale-105 transition"
                buttonText="CREATE EVENT +"
              />
            </Link>
          ) : (
            <CustomButton
              buttonStyles="max-md:hidden text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-full px-6 py-3 max-w-[200px] hover:scale-105 transition"
              buttonText="CREATE EVENT +"
              click={() => {
                toast({
                  title: "Uh oh!",
                  description: `Please log in to create events`,
                });
              }}
            />
          )}
          <Link href="/create" className="md:hidden" target="_blank">
            <CustomButton
              buttonStyles="text-2xl font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-full px-6 py-1 w-[80px] hover:scale-105 transition"
              buttonText="+"
            />
          </Link>

          {/* <DropdownMenu>
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
          </DropdownMenu> */}

          <DropdownMenu>
            <DropdownMenuTrigger>
              {user?.picture ? (
                <Image
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
              )}
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
                  <Link href="/">Settings</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            ) : (
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={`/users/${user.id}`}>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/create">Create Event</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogoutLink>Log Out</LogoutLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            )}
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

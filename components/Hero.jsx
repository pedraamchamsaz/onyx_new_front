import { titan_one } from "@/constants/fonts";
import { madimi_one } from "@/constants/fonts";
import Image from "next/image";
import CustomButton from "./CustomButton";
import Link from "next/link";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const Hero = () => {
  
  const { user } = useKindeBrowserClient();

  return (
    <div className="pt-24 flex xl:flex-row flex-col z-0 max-w-[1440px] mx-auto items-center bg-[#FFE7C3]">
      <div className="flex flex-col xl:items-start items-center gap-14 flex-1 px-6 sm:px-16">
        {!user ? 
        (
        <h1
          className={`${titan_one.className} xl:text-left text-center text-6xl font-extrabold text-orange-600`}
        >
          World-class experiences from the comfort of your home
        </h1>
        ) : (
        <h1
          className={`${titan_one.className} xl:text-left text-center text-6xl font-extrabold text-orange-600`}
        >
          Welcome back, {user.given_name}!
        </h1>
        )
        }
        <Link href="#events">
          <CustomButton
            buttonStyles={`${madimi_one.className} text-lg bg-orange-400 hover:bg-orange-300 border-4 border-orange-600 rounded-full px-6 py-4 max-w-[200px] max-xl:mb-10 hover:scale-105 transition`}
            buttonText="Explore Events"
          />
        </Link>
      </div>

      <div>
        <div>
          <Image
            src="/hero_image.png"
            width={500}
            height={500}
            alt="Hero Image"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

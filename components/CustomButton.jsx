"use client"

import { useToast } from "@/components/ui/use-toast";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const CustomButton = ({ buttonStyles, buttonText }) => {
  const { toast } = useToast();
  const { user } = useKindeBrowserClient();


  return (
    !user ? 
    <button
      className={`${buttonStyles}`}
      onClick={() => {
        toast({
          title: "Uh oh!",
          description: "Please log in to create events",
        });
      }}
    >
      {buttonText}
    </button> :
    <button
    className={`${buttonStyles}`}
  >
    {buttonText}
  </button>
  );
};

export default CustomButton;

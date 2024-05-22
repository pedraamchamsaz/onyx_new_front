"use client"

// import { useToast } from "@/components/ui/use-toast";
// import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const CustomButton = ({ buttonStyles, buttonText, click }) => {
  // const { toast } = useToast();
  // const { user } = useKindeBrowserClient();


  return (
    <button
      className={`${buttonStyles}`}
      onClick={click}
    >
      {buttonText}
    </button>
  );
};

export default CustomButton;

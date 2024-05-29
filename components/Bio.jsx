import Image from "next/image";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import axios from "axios";

const Bio = () => {
  const { user, isLoading } = useKindeBrowserClient();
  console.log(user);

//   const headers = {
//     Accept: "application/json",
//     Authorization: "Bearer {access-token}",
//   };

//   const properties = async () => {
//     const response = await axios.get("https://onyxonline.kinde.com/api/v1/users/kp_a48ce1129dd9411f908e64e49829c948/properties", headers);
//     console.log(response)
//   };

//   const properties = axios.get(
//     "https://onyxonline.kinde.com/api/v1/users/kp_a48ce1129dd9411f908e64e49829c948/properties",
//     { headers }
//   );

  //   fetch("https://onyxonline.kinde.com/api/v1/users/kp_a48ce1129dd9411f908e64e49829c948/properties", {
  //     method: "GET",

  //     headers: headers,
  //   })
  //     .then(function (res) {
  //       return res.json();
  //     })
  //     .then(function (body) {
  //       console.log(body);
  //     });

  return (
    <div className="mx-auto">
      <div className="flex flex-col gap-8 p-6 rounded-[15px] shadow-2xl --tw-shadow-color: #1e293b; w-[300px]">
        <div className="flex flex-col items-center">
          <Image
            src={user?.picture}
            width={100}
            height={100}
            className="rounded-full"
            alt="Profile Pic"
          />
          {isLoading ? (
            <p className="pt-4 font-bold text-2xl">...</p>
          ) : (
            <>
              <h1 className="pt-4 font-bold text-2xl">{user?.given_name}</h1>
              <p className="text-sm">Host</p>
            </>
          )}
          {/* <h1 className="pt-4 font-bold text-2xl">{user.given_name}</h1>
          <p className="text-sm">Host</p> */}
        </div>
        <div className="flex justify-evenly">
          <div className="flex flex-col items-center w-[75px]">
            <h3 className="font-bold">X</h3>
            <p className="text-xs py-2">Reviews</p>
          </div>
          <div className="flex flex-col items-center w-[75px]">
            <h3 className="font-bold">X</h3>
            <p className="text-xs py-2">Rating</p>
          </div>
          <div className="flex flex-col items-center w-[75px]">
            <h3 className="font-bold">X</h3>
            <p className="text-xs py-2 text-center">Joined</p>
          </div>
        </div>
        {/* <div className="px-6">
          <h2 className="font-bold text-lg">Bio</h2>
          {isLoading ? (
            <p>...</p>
          ) : (
            <p className="text-sm xl:w-[200px] pt-3">
              {user?.user_bio}
            </p>
          )}
        </div> */}
      </div>

      <div></div>
    </div>
  );
};

export default Bio;

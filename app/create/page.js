"use client";

import App from "@/components/Form";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#FFE7C3] py-24">
        <App />
      </div>
    </div>
  );
};

export default page;

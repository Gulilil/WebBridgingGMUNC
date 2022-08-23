import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import Logo from "../assets/Logo_dark.png"

const Navbar = () => {
  return (
    <div className="flex h-[90px] items-center sticky top-0 z-50 py-4 px-12 shadow-xl bg-[#e2cbb1]">
      {/* Logo */}
      <img src={Logo} alt="wave" className="h-full" />
      <h1 className = " p-5 text-4xl font-bold"> Bridging GMUNC 2022 </h1>
      
      {/* Pages */}
      < div className = "flex flex-grow justify-end">
        < button className = "bg-[#e2cbb1] p-7 hover:bg-[#b3541e] rounded hover:text-[#ffffff] ">
          <p className = "text-2xl font-bold">Episodes</p>
        </button> 
        < button className = "bg-[#e2cbb1] p-7 hover:bg-[#b3541e] rounded hover:text-[#ffffff] ">
          <p className = "text-2xl font-bold">Quests</p>
        </button> 
        < button className = "bg-[#e2cbb1] p-7 hover:bg-[#b3541e] rounded hover:text-[#ffffff] ">
          <p className = "text-2xl font-bold ">Committee</p>
        </button> 
      </div>
     
    </div>
  );
};

export default Navbar;


import React, { useEffect, useState } from "react";
import ig_logo from "../assets/IG_logo.png"
import linkedin_logo from "../assets/LinkedIn_logo.png"

const Footer = () => {
    return (
        <div className="flex justify-end h-[90px] items-center bottom-0 z-50 py-4 px-12 shadow-xl bg-[#D7a775] gap-5">
            <a href="https://www.instagram.com/gmunc_itb/">
                <img src={ig_logo} alt="wave"  className = "h-12"/>
            </a>
            <a href="https://www.linkedin.com/company/ganeshamunclub/mycompany/">
                <img src={linkedin_logo} alt="wave"  className = "h-14"/>
            </a>
        </div>
    ); 
};

export default Footer;
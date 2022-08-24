import React from 'react';
import { Link } from "react-router-dom";
import kocheng from "../../assets/Kocheng.png";

const Quests = () => {
    return (
    <div className ="bg-[#e2cbb1] h-screen">
        <div className = "flex justify-center text-3xl pt-20 font-bold">
            <div classname = "grid grid-col">
                <p> The "Quests" page is still in progress! </p>
                <img src={kocheng}/>
            </div>
        </div>
    </div>
    );
};

export default Quests;
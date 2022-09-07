import React from 'react';
import { Link } from 'react-router-dom';
import gmunc_gradient from '../../assets/Logo_gradient.png';

const Quests = () => {
    return (
        <div className='bg-[#e2cbb1] h-screen'>
            <div className='flex justify-center items-center flex-col text-3xl text-center pt-20 gap-10'>
            <p className = "font-gbDisplay"> The "Quests" page is still in progress! </p>
                <img src={gmunc_gradient} className="md:w-[400px]"/>
            </div>
        </div>
    );
};

export default Quests;

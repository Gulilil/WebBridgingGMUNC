import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import Logo from '../assets/Logo_dark.png';

const Navbar = () => {
    return (
        <div className='flex h-[90px] items-center sticky top-0 z-50 py-4 px-12 shadow-xl bg-[#D7a775]'>
            {/* Logo */}
            <Link className='flex' to='/'>
                <img src={Logo} alt='wave' className='h-20' />
                <h1 className=' p-5 text-4xl font-bold text-[#4E2320]'>
                    {' '}
                    GMUNC Bridging{' '}
                </h1>
            </Link>

            {/* Pages */}
            <div className='flex flex-grow justify-end'>
                <Link to='/episodes'>
                    <button className='bg-[#D7a775] p-7 hover:bg-[#b3541e] rounded text-brown hover:text-[#ffffff] '>
                        <p className='text-2xl font-bold '>Episodes</p>
                    </button>
                </Link>

                <Link to='/quests'>
                    <button className='bg-[#D7a775] p-7 hover:bg-[#b3541e] rounded text-brown hover:text-[#ffffff] '>
                        <p className='text-2xl font-bold '>Quests</p>
                    </button>
                </Link>

                <Link to='/committee'>
                    <button className='bg-[#D7a775] p-7 hover:bg-[#b3541e] rounded text-brown hover:text-[#ffffff] '>
                        <p className='text-2xl font-bold'>Committee</p>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;

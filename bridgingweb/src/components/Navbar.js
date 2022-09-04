import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import Logo from '../assets/Logo_dark.png';
import MobileMenu from './MobileMenu';
import { MdMenu } from 'react-icons/md';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 1024) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    });

    return (
        <>
            <MobileMenu open={menuOpen} closeMenu={() => setMenuOpen(false)} />
            <div
                style={{ backgroundColor: menuOpen ? '#87633C' : '' }}
                className='flex justify-between h-[90px] items-center sticky top-0 py-4 px-6 z-10 lg:px-12 shadow-xl transition  ease-in-out duration-700 bg-[#D7a775]'
            >
                {/* Logo */}
                <Link className='flex items-center gap-3' to='/'>
                    <img src={Logo} alt='wave' className='h-12 lg:h-20' />
                    <h1 className='p-2 lg:p-5 text-xl md:text-3xl lg:text-4xl font-bold text-[#4E2320]'>
                        {' '}
                        GMUNC Bridging{' '}
                    </h1>
                </Link>

                <div className='flex-grow justify-end flex lg:hidden'>
                    <MdMenu
                        size={38}
                        onClick={() => setMenuOpen(true)}
                        className='text-brown'
                    />
                </div>

                {/* Pages */}
                <div className='flex-grow justify-end hidden lg:flex'>
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
        </>
    );
};

export default Navbar;

import React, { useEffect, useState } from 'react';
import ig_logo from '../assets/IG_logo.png';

const Footer = () => {
    return (
        <div className='flex justify-center h-[300px] items-center py-4 px-12 bg-[#D7a775] '>
            <div className='grid grid-col-4 h-full'>
                <p className='flex justify-center text-4xl font-bold py-4'>
                    {' '}
                    Ganesha Model United Nations Club{' '}
                </p>
                <p className='flex justify-center'>
                    {' '}
                    Bandung Institue of Technology, Jl. Ganesha No. 10, Lb.
                    Siliwangi, Coblong, Kota Bandung, Jawa Barat, 40132{' '}
                </p>
                <a
                    className='flex justify-center py-4'
                    href='https://www.instagram.com/gmunc_itb/'
                >
                    <img src={ig_logo} alt='wave' className='h-6' />
                </a>
                <p className='flex justify-center font-bold'>
                    {' '}
                    Powered by OpsIT GMUNC Bridging{' '}
                </p>
            </div>
        </div>
    );
};

export default Footer;

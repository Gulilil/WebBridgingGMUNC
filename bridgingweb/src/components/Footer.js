import React, { useEffect, useState } from 'react';
import ig_logo from '../assets/IG_logo_2.jpg';
import mun_footer from '../assets/MUN_footer.jpeg';

const Footer = () => {
    return (
        <div className='relative'>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: '300px',
                    alignItems: 'center',
                    padding: '4px',
                    backgroundImage: `url("${mun_footer}")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(0.8px) brightness(40%) grayscale(0.3)',
                }}
            ></div>
            <div className='absolute top-0 left-0 w-full h-full flex justify-center mx-auto'>
                <div className='text-white bottom-20 md:mt-12'>
                    <p className='flex justify-center text-2xl text-center md:text-4xl font-bold py-4'>
                        Ganesha Model United Nations Club
                    </p>
                    <p className='flex justify-center text-center md:text-left px-3 md:p-0'>
                        {' '}
                        Bandung Institue of Technology, Jl. Ganesha No. 10, Lb.
                        Siliwangi, Coblong, Kota Bandung, Jawa Barat, 40132{' '}
                    </p>
                    <a
                        className='flex justify-center py-2'
                        href='https://www.instagram.com/gmunc_itb/'
                    >
                        <img src={ig_logo} alt='wave' className='h-12' />
                    </a>
                    <p className='flex justify-center font-bold'>
                        {' '}
                        Powered by OpsIT GMUNC Bridging{' '}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;

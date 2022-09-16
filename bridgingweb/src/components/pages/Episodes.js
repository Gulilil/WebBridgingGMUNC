import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import gmunc_gradient from '../../assets/Logo_gradient.png';

const Episodes = () => {
    return (
        <div className='bg-[#e2cbb1] flex-1'>
            <Outlet />
        </div>
    );
};

export default Episodes;

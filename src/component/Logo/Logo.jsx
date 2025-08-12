import React from 'react';
import logoImage from '../../assets/Images/portfolio-Logo.png'

const Logo = () => {
    return (
        <div className='flex items-center gap-3'>
            <img className='size-16' src={logoImage} alt="Portfolio-Logo" />
            <h1 className='text-2xl font-bold'>Kousar</h1>
        </div>
    );
};

export default Logo;
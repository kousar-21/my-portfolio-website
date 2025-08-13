import React from 'react';
import myImage from '../../assets/Images/my-img.png'
import ImageAnimation from '../Animation/ImageAnimation';

const Hero = () => {
    return (
        <div className='text-white grid grid-cols-2'>
            {/* text part */}
            <div className='text-center'>
                <p>hello world</p>
            </div>
            {/* Image part */}
            <div className='text-center'>
               
                {/* <img src={myImage} className=' h-[200px] w-[200px]' alt="" /> */}
                This part for image skip it and continue

            </div>
        </div>
    );
};

export default Hero;
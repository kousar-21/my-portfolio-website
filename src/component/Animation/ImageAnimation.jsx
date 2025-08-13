import React from 'react';
import Orb from '../../assets/Orb/Orb';

const ImageAnimation = ({ children }) => {
    return (
        <div style={{ position: "relative" }}>
            {/* Background Animation */}
            <div className='bg-gray-700' style={{ position: "absolute", inset: 0, zIndex: -1, height: "100%" }}>
                <Orb></Orb>
            </div>


            {/* Frontend Part */}
            <div style={{ position: "relative", zIndex: 1 }}>
                {children}
            </div>
        </div>
    );
};

export default ImageAnimation;
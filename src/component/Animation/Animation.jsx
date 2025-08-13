import React from 'react';
import Galaxy from '../../assets/Galaxy/Galaxy';

const Animation = ({ children }) => {
    return (
        <div style={{ position: "relative" }}>
            {/* Background Animation */}
            <div className='bg-gray-700' style={{ position: "absolute", inset: 0, zIndex: -1, height: "100%" }}>
                <Galaxy></Galaxy>
            </div>


            {/* Frontend Part */}
            <div style={{ position: "relative", zIndex: 1 }}>
                {children}
            </div>
        </div>
    );
};

export default Animation;
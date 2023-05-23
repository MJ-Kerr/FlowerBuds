import React from 'react';
import Logo from './img/Logo.png';
import Background from './img/Background.JPEG';

const Dash = () => {
    const bgStyle = {
        backgroundImage: `url(${Background})`,
    };

    return (
        <div className="bg-cover bg-center h-screen flex items-center justify-center"
            style={bgStyle}>
            <div className="text-center text-black ">
                <h1 className="mb-2 text-4xl font-bold">
                    Hero section with background image
                </h1>
                <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="mt-4">
                    <button className="px-6 py-2 text-white bg-indigo-600 rounded-md shadow-md">
                        Get started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dash;

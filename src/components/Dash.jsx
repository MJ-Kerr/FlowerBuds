import React from 'react';
import Background from './img/Background.JPEG';
import ProductCard from './ProductCard';
import About from './About';
import Logo from './img/Logo.png'

const Dash = () => {
    const bgStyle = {
        backgroundImage: `url(${Background})`,
    };

    return (
        <div>
            <div className="bg-cover bg-center h-screen flex items-center justify-center" style={bgStyle}>
                <div className="container mx-auto sm:relative sm:top-20">
                    <div className="my-8 sm:mt-8">
                        <About />
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-8">
                <ProductCard />
            </div>
        </div>
    );
};

export default Dash;

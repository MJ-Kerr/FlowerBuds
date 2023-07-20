import React from 'react';
import Background from './img/Background.JPEG';
import ProductCard from './ProductCard';
import About from './About';
// import Logo from './img/Logo.png'
const Dash = () => {
    const bgStyle = {
        backgroundImage: `url(${Background})`,
        backgroundAttachment: 'fixed',
    };

    return (
        <div className="bg-cover bg-center h-screen flex flex-col items-center overflow-auto" style={bgStyle}>
            <div className="container mx-auto px-4">
                {/* <div className='my-8 center center'>
                    <img src={Logo} alt="FlowerBuds" />
                </div> */}
                <div className="my-8">
                    <About />
                </div>
                <div className="mt-8">
                    <ProductCard />
                </div>
            </div>
        </div>
    );
};

export default Dash;

import React from 'react'
// import Construction from './img/Construction.png'
import Background from './img/Background.JPEG';

const Bawlers = () => {
    const bgStyle = {
        backgroundImage: `url(${Background})`,
    };

    return (
        <div className="bg-cover bg-center h-screen flex items-center justify-center"
            style={bgStyle}>
        </div>
    )
}

export default Bawlers
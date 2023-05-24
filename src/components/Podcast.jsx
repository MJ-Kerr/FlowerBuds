import React from 'react'
import Background from './img/Background.JPEG';
import Construction from './img/Construction.png'

const Podcast = () => {
    const bgStyle = {
        backgroundImage: `url(${Background})`
    };

    return (
        <div className="bg-cover bg-center h-screen flex items-center justify-center"
            style={bgStyle}>
            <img src={Construction} alt="Oops" />
        </div>
    )
}

export default Podcast
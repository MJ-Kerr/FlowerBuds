import React from 'react'
import Background from './img/Background.JPEG';
// import coming_soon from './img/coming_soon.png'
import Construction from './img/Construction.png'

const Podcast = () => {
    const bgStyle = {
        backgroundImage: `url(${Background})`,
        backgroundAttachment: 'fixed',
    };

    return (
        <div className="bg-cover bg-center h-screen flex flex-col items-center overflow-auto mt-4" style={bgStyle}>
            <img src={Construction} alt="Oops" />
        </div>
    )
}

export default Podcast
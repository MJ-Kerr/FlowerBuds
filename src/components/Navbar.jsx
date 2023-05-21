import React from 'react'
import LogoBtn from './img/LogoBtn'

const Navbar = () => {
    return (
        <div>
            <div className="grid grid-cols-10 text-4xl font-bold text-teal-200">
                <div className="bg-rose-800 aspect-square">
                    <p>F</p>

                </div>
                <div className="bg-fuchsia-950 aspect-square">
                    <p>L</p>
                    <img src={LogoBtn} alt='logobtn' />
                </div>
                <div className="bg-indigo-900 aspect-square">
                    <p>O</p>
                </div>
                <div className="bg-blue-950 aspect-square">
                    <p>W</p>
                </div>
                <div className="bg-teal-950 aspect-square">
                    <p>E</p>
                </div>
                <div className="bg-lime-900 aspect-square">
                    <p>R</p>
                </div>
                <div className="bg-yellow-700 aspect-square">
                    <p>B</p>
                </div>
                <div className="bg-red-900 aspect-square">
                    <p>U</p>
                </div>
                <div className="bg-violet-950 aspect-square">
                    <p>D</p>
                </div>
                <div className="bg-slate-900 aspect-square">
                    <p>S</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
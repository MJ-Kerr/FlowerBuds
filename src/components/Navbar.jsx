import React from 'react'
import LogoBtn from './img/LogoBtn.png'
const Navbar = () => {

    const handleClick = e => {
        console.log(e.target);
        console.log("Logo Clicked")
    }

    return (
        <div>
            <div className="grid grid-cols-12 text-7xl font-bold text-teal-600">
                <div className="p-4 space-y-2 bg-gray-600 rounded shadow">
                    <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                    <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                    <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                </div>
                <div className="bg-rose-800">
                    <p>F</p>
                </div>
                <div className="bg-slate-900">
                    <p>L</p>
                </div>
                <div className="bg-indigo-900">
                    <p>O</p>
                </div>
                <div className="bg-blue-950">
                    <p>W</p>
                </div>
                <div className="bg-teal-950">
                    <p>E</p>
                </div>
                <div className="bg-lime-900">
                    <p>R</p>
                </div>
                <div className="bg-yellow-700">
                    <p>B</p>
                </div>
                <div className="bg-red-900">
                    <p>U</p>
                </div>
                <div className="bg-violet-950">
                    <p>D</p>
                </div>
                <div className="bg-fuchsia-950">
                    <p>S</p>
                </div>
                <div>
                    <div className="bg-orange-900">
                        <button><img src={LogoBtn} alt='logobtn' onClick={handleClick} /></button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className="grid grid-cols-10 text-4xl font-bold text-teal-200">
                <div className="bg-rose-800 aspect-square">F</div>
                <div className="bg-fuchsia-950 aspect-square">L</div>
                <div className="bg-indigo-900 aspect-square">O</div>
                <div className="bg-blue-950 aspect-square">W</div>
                <div className="bg-teal-950 aspect-square">E</div>
                <div className="bg-lime-900 aspect-square">R</div>
                <div className="bg-yellow-700 aspect-square">B</div>
                <div className="bg-red-900 aspect-square">U</div>
                <div className="bg-violet-950 aspect-square">D</div>
                <div className="bg-slate-900 aspect-square">S</div>
            </div>
        </div>
    )
}

export default Navbar
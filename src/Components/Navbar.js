import React from 'react'
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <div className="bg-green-50 relative z-10">
                <div className="bg-green-50 top-0 fixed w-screen">
                    <div className="container text-green-800 mx-auto flex justify-between font-mono text-gray-900 pt-4 pb-5">
                        <div className="h-12 w-12 cursor-pointer"><img className="object-contain" src="./boy.png" alt="logo"/></div>
                        {/* <div className="text-3xl font-bold cursor-pointer">Kh_Shuhat</div> */}
                        <ul className="text-lg font-semibold self-end font-Itim">
                            <li className="inline ml-3 md:ml-5 sm:text-lg text-sm p-2 cursor-pointer hover:bg-green-100 rounded-lg"><Link to="/">Home</Link></li>
                            <li className="inline ml-3 md:ml-5 sm:text-lg text-sm p-2 cursor-pointer hover:bg-green-100 rounded-lg"><Link to="/myskills">My Skills</Link></li>
                            <li className="inline ml-3 md:ml-5 sm:text-lg text-sm p-2 cursor-pointer hover:bg-green-100 rounded-lg"><Link to="/myprojects">My Projects</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

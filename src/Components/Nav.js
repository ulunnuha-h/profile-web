import React from "react";
import logo from "../Assets/logo512.png";

const Nav = () => {
    return(
        <nav className="h-16 flex justify-center items-center lg:mx-12 md:justify-between sticky top-0 bg-slate-900">
            <a href="/" className="h-full">
                <img src={logo} alt="logo" className="h-full py-2 md:block hidden"></img>
            </a>
            <ul className="flex gap-9 text-gray-100 font-league">
                <li className="hover:text-gray-400"><a href="#about">About</a></li>
                <li className="hover:text-gray-400"><a href="#project">Project</a></li>
                <li className="hover:text-gray-400"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav;

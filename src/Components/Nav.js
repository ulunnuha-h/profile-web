import React from "react";
import logo from "../Assets/logo512.png";

const Nav = () => {
    return(
        <nav className="h-16 flex justify-center items-center mx-12 md:justify-between">
            <img src={logo} alt="logo" className="h-full py-2 md:block hidden"></img>
            <ul className="flex gap-9 text-gray-100 font-league">
                <li className="hover:text-gray-300"><a href="#">About</a></li>
                <li className="hover:text-gray-300"><a href="#">Project</a></li>
                <li className="hover:text-gray-300"><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav;

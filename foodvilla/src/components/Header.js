import React, {useState } from 'react';
import {Link} from "react-router-dom";

const loggedInUser = () => {
    //API call to check authentication
    return true;
};

const NavItems = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <React.Fragment>
            <ul className='flex py-10'>
                <li className='px-2'><Link to="/">Home</Link></li>
                <li className='px-2'><Link to="/about">About</Link></li>
                <li className='px-2'><Link to="/instamart">Instamart</Link></li>
                <li className='px-2'>Offers</li>
                <li className='px-2'>Help</li>
                <li className='px-2'>Sign In</li>
                <li className='px-2'>Cart <span>(0)</span></li>
            </ul>
            {
                isLoggedIn 
                ? 
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                : 
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            }            
        </React.Fragment>
    );
};

const Header = () => {
    return (
        <div className='flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50'>
            <img src="https://foodvilla.no/src/img/logo.png" width="130px" className="h-24 p-2" />
            <NavItems />
        </div>
    );
};

export default Header;
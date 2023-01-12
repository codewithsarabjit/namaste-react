import React from 'react';


const NavItems = () => {
    return (
        <ul className='nav_items'>
            <li>Home</li>
            <li>Offers</li>
            <li>Help</li>
            <li>Sign In</li>
            <li>Cart <span>(0)</span></li>
        </ul>
    );
};

const Header = () => {
    return (
        <div className='header_container'>
            <img src="https://foodvilla.no/src/img/logo.png" width="130px" />
            <NavItems />
        </div>
    );
};

export default Header;
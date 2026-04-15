import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png'

const NavbarPage = () => {
    const links = <>
    <li><Link href='/'>Home</Link></li>
        <li><Link href='/timeline'>Timeline</Link></li>
        <li><Link href='/stats'>Stats</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-lg md:px-17">
            <div className="flex-1">
                <Image src={logo} alt="logo" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default NavbarPage;
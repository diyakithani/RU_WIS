"use client"

import React from 'react';
import logo from "../assets/logo.png";
import Image from 'next/image';
import { navItems } from '../constants';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';


const Navbar = () => {
    const [MobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    function toggle() {
        setMobileDrawerOpen(!MobileDrawerOpen);
    }
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-neutral-700/80">
            <div className="container px-4 mx-auto relative tx-sm">
                <div className="flex justify-center items-center">
                    <div className="flex items-center flex-shrink-0">
                        <Image src={logo} className='h-10 w-10' alt="venturelogo" /> {/* logo change */}
                        <span className="text-xl tracking-tight mr-7">RNRVentures</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))} </ul>
                    <div className="hidden lg:flex space-x-12 ml-8">

                        <a href='#' className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
                            Contact Us
                        </a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end pl-3">
                        <button onClick={toggle}>
                            {MobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {MobileDrawerOpen && (
                    <div className='fixed right-0 z-20 bg bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className='py-4'>
                                    <a href={item.href}>{item.label}</a>
                                </li>))}


                        </ul>
                        <div className="flex space-x-6">
                            <a href="#" className='py-2 px-3 border rounded-md'>
                                Sign In
                            </a>
                            <a href="#" className='py-2 px-3 border rounded-md bg-gradient-to-r from-orange-400 to orange-800'>
                                Create An Account
                            </a>
                        </div>
                    </div >)}
            </div>
        </nav>
    )
}

export default Navbar

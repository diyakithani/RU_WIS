"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo.png";
import { navItems } from '../constants';

const Navbar = () => {
    const [MobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    function toggle() {
        setMobileDrawerOpen(!MobileDrawerOpen);
    }

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-md bg-purple-900/80 border-b border-purple-300/40">
            <div className="container px-6 mx-auto relative">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <Image src={logo} className="h-10 w-10" alt="venturelogo" />
                        <span className="text-2xl font-semibold tracking-wide text-pink-200">Women In STEM</span>
                    </div>

                    <ul className="hidden lg:flex space-x-10">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="text-pink-200 hover:text-pink-400 transition-colors duration-300">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden lg:flex space-x-6">
                        <a href="#" className="bg-gradient-to-r from-pink-500 to-purple-700 py-2 px-4 rounded-full text-white font-medium hover:shadow-lg transition-transform duration-300">
                            Contact Us
                        </a>
                    </div>

                    <div className="lg:hidden">
                        <button onClick={toggle} className="text-pink-200">
                            {MobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {MobileDrawerOpen && (
                    <div className="fixed inset-0 z-20 bg-gradient-to-r from-purple-900 to-purple-700 p-8 flex flex-col justify-center items-center lg:hidden">
                        <ul className="space-y-6">
                            {navItems.map((item, index) => (
                                <li key={index} className="text-white text-lg">
                                    <a href={item.href} className="hover:text-pink-300 transition-colors duration-300">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="mt-6 bg-gradient-to-r from-pink-400 to-purple-700 py-2 px-6 rounded-full text-white font-medium hover:shadow-lg transition-transform duration-300">
                            Contact Us
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

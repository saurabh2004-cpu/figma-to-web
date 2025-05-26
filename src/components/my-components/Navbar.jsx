'use client';

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="relative w-full">
            {/* Logo */}
            <img
                src="/images/logo/logo.svg"
                alt="Company Logo"
                className="absolute md:left-[135px] md:top-[16px] w-[152px] md:w-[132px] h-[48px]"
            />

            {/* Navigation Links */}
            <nav className="absolute flex md:w-[515px] md:h-[32px] md:top-[28px] md:left-[463px]">
                <ul className="flex justify-between w-full font-epilogue text-white text-[16px] leading-[32px] tracking-[0px] text-center">
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/services">Services</Link>
                    </li>
                    <li>
                        <Link href="/pricing">Pricing</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>

            {/* Contact Button */}
            <button
                className="absolute md:w-[138px] md:h-[48px] md:left-[1167px] md:top-[28px] font-epilogue font-black text-[14px] leading-[100%] uppercase text-white border border-white/30 rounded-[6px] flex items-center justify-center
                    hover:bg-[#ef6d58] transition-all duration-300 ease-in-out active:scale-95"
            >
                Contact
            </button>
        </div>
    );
};

export default Navbar;


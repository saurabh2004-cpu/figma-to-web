// 'use client'
import React from 'react'
import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            {/* Logo */}
            <img src="/images/logo/logo.svg" alt="Logo" className=" absolute md:left-[135px] md:top-[16px] w-[152px] md:w-[132px] h-[48px]" />
            <div className="absolute md:left-[135px] md:top-[16px]">
            </div>
            <nav className="flex items-center justify-between">

                {/* Navigation Links */}
                <ul className="absolute flex md:w-[515px] md:h-[32px] md:top-[28px] md:left-[463px] font-normal font-epilogue text-white text-[16px] justify-between leading-[32px] tracking-[0px] text-center">
                    <li>
                        <Link href="#">About</Link>
                    </li>
                    <li>
                        <Link href="#">Services</Link>
                    </li>
                    <li>
                        <Link href="#">Pricing</Link>
                    </li>
                    <li>
                        <Link href="#">Blog</Link>
                    </li>
                </ul>

            </nav>

            {/* Contact Button */}
            <button
                className="absolute md:w-[138px] md:h-[48px] md:left-[1167px] md:top-[28px] font-epilogue font-black text-[14px] leading-[100%] uppercase text-white border border-white/30 rounded-[6px] flex items-center justify-center
                    hover:bg-[#ef6d58]  
                  transition-all duration-300 ease-in-out
                  active:scale-95"
            >
                Contact
            </button>
        </div>
    )
}

export default Navbar

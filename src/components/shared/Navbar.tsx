'use client'
import { usePathname } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
    const [toggleNavLinks, setToggleNavLinks] = useState(false)
    const [profileToggle, setProfileToggle] = useState(false)

    const pathName = usePathname()
    return (
        <nav className={`grid grid-cols-3 items-center py-2 px-2   bg-white ${pathName === '/' ? 'absolute  top-2 left-2 right-2 z-10':'sticky top-0'}`}>
            <div className="flex items-center justify-start">
                <ul className="hidden  sm:flex items-center gap-4">
                    <Link href="/"><li className={`${pathName === '/' && 'text-blue-500'}`}>Home</li></Link>
                    <li>Destinations</li>
                    <li>My Bookings</li>
                    <li>Admin</li>
                </ul>
                <div className="flex sm:hidden">
                    <span onClick={() => { setToggleNavLinks(!toggleNavLinks) }}>{!toggleNavLinks ? <RxHamburgerMenu /> : <RxCross2 />}</span>
                </div>

                <ul className={` fixed top-20 left-0 h-screen bg-white w-full  transition-transform duration-300 ease-in-out ${toggleNavLinks ? 'translate-x-0' : '-translate-x-full'}`}>
                    <Link href="/"><li className={`${pathName === '/' && 'text-blue-500'}`}>Home</li></Link>
                    <li>Destinations</li>
                    <li>My Bookings</li>
                    <li>Admin</li>
                </ul>


            </div>
            <div className="mx-auto">
                <h3 className="text-center text-2xl text-blue-600 font-bold">Wanderlust</h3>
            </div>
            <div className="hidden sm:flex items-center justify-end gap-2">
                <div className="flex items-center gap-1">
                    <span><FaUser /></span>
                    <span>Profile</span>
                </div>
                <span>Login</span>
                <span>Signup</span>
            </div>
            <div className=" items-center  sm:hidden  gap-2">
                <div className="flex items-center justify-end gap-1">
                    <span onClick={() => setProfileToggle(!profileToggle)}><FaUser /></span>
                    {/* <span>Profile</span> */}
                </div>

            </div>
            {
                profileToggle &&
                <div className="absolute top-10 right-5 bg-white border border-gray-100 rounded-xl px-4 py-4 ">
                    <div className="flex flex-col">
                        <span>Login</span>
                        <span>Signup</span>
                    </div>
                </div>
            }
        </nav>


    );
};

export default Navbar;
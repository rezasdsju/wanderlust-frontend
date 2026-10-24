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
        <nav className={`grid grid-cols-3 items-center py-2 px-2   bg-white ${pathName === '/' ? 'absolute  sm:top-2 sm:left-2 sm:right-2 z-10' : 'sticky top-0'}`}>
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

                <ul
                    className={`fixed top-16 left-0 h-screen w-full bg-white flex flex-col px-6 py-4 transition-transform duration-300 ease-in-out ${toggleNavLinks ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <li className="border-b border-neutral-100">
                        <Link
                            href="/"
                            onClick={() => setToggleNavLinks(false)}
                            className={`block py-4 text-lg ${pathName === '/' ? 'text-blue-500 font-semibold' : 'text-neutral-700'}`}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="border-b border-neutral-100 py-4 text-lg text-neutral-700">Destinations</li>
                    <li className="border-b border-neutral-100 py-4 text-lg text-neutral-700">My Bookings</li>
                    <li className="py-4 text-lg text-neutral-700">Admin</li>
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
            {profileToggle && (
                <div className="absolute top-14 right-4 w-40 rounded-xl border border-neutral-100 bg-white p-2 shadow-lg">
                    <div className="flex flex-col gap-1">
                        <button className="rounded-md px-3 py-2 text-left hover:bg-neutral-50">
                            Login
                        </button>
                        <button className="rounded-md bg-blue-600 px-3 py-2 text-left text-white hover:bg-blue-700">
                            Signup
                        </button>
                    </div>
                </div>
            )}
        </nav>


    );
};

export default Navbar;
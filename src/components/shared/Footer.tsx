'use client'

import Link from "next/link";
import type { FormEvent } from "react";
import { FaArrowRight, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/destinations" },
    { label: "My Bookings", href: "/bookings" },
    { label: "My Profile", href: "/profile" },
];

const supportLinks = [
    { label: "Help Center", href: "/help" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
];

const socialLinks = [
    { label: "X", href: "https://x.com", icon: FaXTwitter },
    { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
    { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
];

const Footer = () => {
    const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.currentTarget.reset();
    };

    return (
        <footer className="bg-[#0C0B0B] text-white">
            <div className="mx-auto w-full max-w-360 px-6 pt-6 pb-4 sm:px-6 sm:pt-7 lg:px-8 lg:pt-10">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-3xl lg:text-4xl xl:text-5xl">Wanderlust</h2>
                    <p className="mt-3 text-sm text-[#B6B6B6] sm:text-base lg:text-lg">
                        Your gateway to extraordinary travel experiences around the world.
                    </p>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-6 lg:grid-cols-[1.6fr_repeat(3,1fr)] lg:gap-x-16">
                    <div className="max-w-85">
                        <h3 className="text-xs font-medium tracking-[0.18em] text-[#9C9C9C] uppercase">
                            Newsletter
                        </h3>
                        <p className="mt-3 text-[13px] leading-relaxed text-[#8F8F8F]">
                            Subscribe for exclusive travel deals and inspiration.
                        </p>

                        <form onSubmit={handleSubscribe} className="mt-4 flex items-stretch bg-[#6B6B6B]">
                            <label htmlFor="newsletter-email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="newsletter-email"
                                type="email"
                                required
                                placeholder="Enter email"
                                autoComplete="email"
                                className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-white placeholder:text-[#E3E3E3] focus:outline-none"
                            />
                            <button
                                type="submit"
                                aria-label="Subscribe to the newsletter"
                                className="flex shrink-0 items-center justify-center bg-[#8C8C8C] px-4 text-[#1A1A1A] transition-colors hover:bg-white"
                            >
                                <FaArrowRight size={12} />
                            </button>
                        </form>
                    </div>

                    <div>
                        <h3 className="text-xs font-medium tracking-[0.15em] text-[#9C9C9C] uppercase">
                            Quick Links
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm lg:text-base">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="transition-colors hover:text-[#B6B6B6]">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-medium tracking-[0.15em] text-[#9C9C9C] uppercase">
                            Support
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm lg:text-base">
                            {supportLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="transition-colors hover:text-[#B6B6B6]">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-medium tracking-[0.15em] text-[#9C9C9C] uppercase">
                            Contact Us
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm lg:text-base">
                            <li>
                                <a href="tel:+17869011622" className="transition-colors hover:text-[#B6B6B6]">
                                    786 901 1622
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@wandarland.com" className="transition-colors hover:text-[#B6B6B6]">
                                    info@wandarland.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between lg:mt-20">
                    <p className="text-xs text-[#8A8A8A] sm:text-sm">&copy; 2026 Wanderlust. All rights reserved.</p>
                    <div className="flex items-center gap-5">
                        {socialLinks.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="text-[#D4D4D4] transition-colors hover:text-white"
                            >
                                <Icon size={15} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

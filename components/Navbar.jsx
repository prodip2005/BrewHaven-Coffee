"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCoffee, FaShoppingBag, FaUser, FaSignOutAlt, FaBars, FaTimes, FaPlus, FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const pathname = usePathname();
    const { getCartCount } = useCart();
    const cartCount = getCartCount();

    useEffect(() => {
        // Check auth
        const checkAuth = () => {
            const allCookies = document.cookie.split(';');
            const authCookie = allCookies.find(c => c.trim().startsWith('auth='));
            setIsLoggedIn(!!authCookie);
        };

        checkAuth();
        // Re-check on interval or cookie change (simplified for now)
        const interval = setInterval(checkAuth, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLogout = () => {
        document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = "/login";
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Menu", href: "/items" },
        { name: "About", href: "/#about" },
    ];

    if (isLoggedIn) {
        navLinks.push({ name: "My Cart", href: "/my-cart" });
        navLinks.push({ name: "My Items", href: "/admin/my-items" });
    }

    return (
        <nav
            className="fixed w-full z-50 transition-all duration-300 bg-[#2C1810] shadow-md py-4"
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-serif text-white">
                    <FaCoffee className="text-3xl text-[#D4A373]" />
                    <span>BrewHaven</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`font-medium transition-colors text-lg flex items-center gap-2 ${pathname === link.href ? "text-[#D4A373] font-bold" : "text-gray-200 hover:text-[#D4A373]"
                                }`}
                        >
                            {link.name === "My Cart" && <FaShoppingCart />}
                            {link.name}
                            {link.name === "My Cart" && cartCount > 0 && (
                                <span className="bg-[#D4A373] text-[#2C1810] text-xs font-bold px-2 py-0.5 rounded-full -ml-1">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    {isLoggedIn ? (
                        <>
                            <Link
                                href="/admin/add-item"
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4A373] text-[#2C1810] font-bold text-sm hover:bg-[#F4E4BC] transition-all shadow-md hover:shadow-lg"
                            >
                                <FaPlus /> Add Item
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#D4A373] text-[#D4A373] font-bold text-sm hover:bg-[#D4A373]/10 transition-all"
                            >
                                <FaSignOutAlt />
                            </button>
                        </>
                    ) : (
                        <Link
                            href="/login"
                            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#D4A373] text-[#2C1810] font-bold text-sm hover:bg-[#F4E4BC] transition-all shadow-lg"
                        >
                            <FaUser /> Login
                        </Link>
                    )}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-2xl text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-[#2C1810] shadow-xl border-t border-[#3E2D23] p-6 flex flex-col gap-4 md:hidden">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-lg font-medium py-2 border-b border-[#3E2D23] flex items-center justify-between ${pathname === link.href ? "text-[#D4A373]" : "text-white"
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            <div className="flex items-center gap-2">
                                {link.name === "My Cart" && <FaShoppingCart />}
                                {link.name}
                            </div>
                            {link.name === "My Cart" && cartCount > 0 && (
                                <span className="bg-[#D4A373] text-[#2C1810] text-xs font-bold px-2 py-0.5 rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    ))}
                    {isLoggedIn ? (
                        <div className="flex flex-col gap-3 pt-2">
                            <Link
                                href="/admin/add-item"
                                className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#D4A373] text-[#2C1810] font-bold"
                                onClick={() => setIsOpen(false)}
                            >
                                <FaPlus /> Add Item
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="flex items-center justify-center gap-2 px-5 py-3 rounded-full border-2 border-[#D4A373] text-[#D4A373] font-bold"
                            >
                                <FaSignOutAlt /> Logout
                            </button>
                        </div>
                    ) : (
                        <Link
                            href="/login"
                            className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#D4A373] text-[#2C1810] font-bold mt-2"
                            onClick={() => setIsOpen(false)}
                        >
                            <FaUser /> Login
                        </Link>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;

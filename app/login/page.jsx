"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaCoffee } from "react-icons/fa";
import toast from "react-hot-toast";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === "user@example.com" && password === "password") {
            // Set simple cookie for mock auth
            document.cookie = "auth=true; path=/; max-age=3600"; // 1 hour
            toast.success("Welcome back! ☕");
            router.push("/items");
            router.refresh(); // Refresh to update Navbar state
        } else {
            toast.error("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="min-h-[85vh] flex items-center justify-center bg-[#FDFBF7] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-[#F4E4BC] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-[#D4A373] rounded-full blur-3xl opacity-30 pointer-events-none"></div>

            <div className="max-w-md w-full space-y-8 bg-white p-12 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative z-10 border border-gray-100">
                <div className="text-center">
                    <div className="w-20 h-20 bg-[#F4E4BC]/50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#6F4E37]">
                        <FaCoffee className="h-10 w-10" />
                    </div>
                    <h2 className="text-4xl font-extrabold text-[#2C1810] font-serif mb-2">
                        Welcome Back
                    </h2>
                    <p className="text-[#6D5A50] text-lg">
                        Sign in to access your coffee preferences
                    </p>
                </div>
                <form className="mt-10 space-y-6" onSubmit={handleLogin}>
                    <div className="space-y-5">
                        <div>
                            <label htmlFor="email-address" className="block text-sm font-bold text-[#2C1810] mb-2 pl-1">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none block w-full px-5 py-4 border border-gray-200 rounded-xl placeholder-gray-400 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6F4E37] focus:border-transparent focus:bg-white transition-all shadow-sm"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-bold text-[#2C1810] mb-2 pl-1">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none block w-full px-5 py-4 border border-gray-200 rounded-xl placeholder-gray-400 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6F4E37] focus:border-transparent focus:bg-white transition-all shadow-sm"
                                placeholder="Min. 8 characters"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-lg font-bold rounded-xl text-white bg-[#6F4E37] hover:bg-[#5D4037] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6F4E37] transition-all transform hover:scale-[1.02] shadow-lg shadow-[#6F4E37]/30"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <div className="text-center mt-8 pt-8 border-t border-gray-100">
                    <p className="text-sm text-[#8D7A70]">
                        Use <strong>user@example.com</strong> and <strong>password</strong>
                    </p>
                </div>
            </div >
        </div >
    );
}

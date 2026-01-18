"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaTrash, FaShoppingCart, FaArrowLeft, FaCreditCard, FaReceipt, FaMugHot } from "react-icons/fa";

export default function MyCartPage() {
    const { cart, removeFromCart, getCartTotal, clearCart } = useCart();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Authenticate user
        const allCookies = document.cookie.split(';');
        const authCookie = allCookies.find(c => c.trim().startsWith('auth='));

        if (!authCookie) {
            router.push("/login");
        } else {
            setLoading(false);
        }
    }, [router]);

    if (loading) return <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7] text-[#6F4E37] font-bold">Loading...</div>;

    const subtotal = getCartTotal();
    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    return (
        <div className="min-h-screen bg-[#FDFBF7] py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <span className="text-[#6F4E37] font-bold tracking-widest uppercase text-sm">Your Order</span>
                    <h1 className="text-5xl font-bold font-serif text-[#2C1810]">My Cart</h1>
                </div>

                {cart.length === 0 ? (
                    <div className="max-w-md mx-auto bg-white p-12 rounded-[2rem] border border-[#E0D0C0] shadow-xl text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4E4BC]/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="w-24 h-24 bg-[#6F4E37]/5 rounded-full flex items-center justify-center mx-auto mb-6 text-[#6F4E37]">
                            <FaShoppingCart className="text-4xl" />
                        </div>
                        <h2 className="text-3xl font-bold font-serif text-[#2C1810] mb-4">Your cart is empty</h2>
                        <p className="text-[#8D7A70] mb-10 text-lg">Looks like you haven't added any of our delicious blends yet!</p>
                        <Link
                            href="/items"
                            className="inline-flex items-center gap-2 px-10 py-4 bg-[#6F4E37] text-white font-bold rounded-full hover:bg-[#5D4037] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <FaArrowLeft /> Browse Menu
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Cart Items List */}
                        <div className="lg:w-2/3 space-y-6">
                            <div className="bg-white rounded-[2rem] shadow-sm border border-[#E0D0C0] overflow-hidden p-8">
                                <h3 className="text-xl font-bold text-[#2C1810] mb-6 flex items-center gap-2">
                                    <FaMugHot className="text-[#6F4E37]" /> Selected Items ({cart.length})
                                </h3>
                                <div className="space-y-6">
                                    {cart.map((item, index) => (
                                        <div
                                            key={`${item.id}-${index}`}
                                            className="group flex flex-col sm:flex-row items-center gap-6 p-4 rounded-2xl hover:bg-[#F9F5F1] transition-colors border border-transparent hover:border-[#EAE0D5]"
                                        >
                                            <div className="w-full sm:w-32 h-32 rounded-xl overflow-hidden bg-gray-100 shrink-0 shadow-md">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            </div>

                                            <div className="grow text-center sm:text-left space-y-1">
                                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                                                    <div>
                                                        <h4 className="text-xl font-bold font-serif text-[#2C1810]">{item.name}</h4>
                                                        <p className="text-sm text-[#8D7A70] line-clamp-1">{item.description}</p>
                                                    </div>
                                                    <span className="text-xl font-bold text-[#6F4E37]">${item.price.toFixed(2)}</span>
                                                </div>
                                                <div className="flex items-center justify-center sm:justify-start gap-4 pt-2">
                                                    <span className="text-xs font-bold uppercase tracking-wider text-[#A67B5B] bg-[#A67B5B]/10 px-3 py-1 rounded-full">
                                                        Qty: {item.quantity || 1}
                                                    </span>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="p-3 text-red-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                                                title="Remove Item"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Order Summary Card */}
                        <div className="lg:w-1/3">
                            <div className="bg-white p-8 rounded-[2.5rem] border border-[#E0D0C0] shadow-2xl sticky top-28 bg-[url('https://www.transparenttextures.com/patterns/paper.png')]">
                                <div className="flex items-center gap-3 mb-8 pb-6 border-b-2 border-dashed border-[#E0D0C0]">
                                    <div className="p-3 bg-[#6F4E37] text-white rounded-xl">
                                        <FaReceipt size={20} />
                                    </div>
                                    <h3 className="text-2xl font-bold font-serif text-[#2C1810]">Order Summary</h3>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center text-[#6D5A50] text-lg">
                                        <span>Subtotal</span>
                                        <span className="font-medium">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[#6D5A50] text-lg">
                                        <span>Tax (5%)</span>
                                        <span className="font-medium">${tax.toFixed(2)}</span>
                                    </div>
                                    <div className="pt-6 mt-4 border-t-2 border-[#2C1810] flex justify-between items-center">
                                        <span className="text-[#2C1810] text-xl font-serif font-bold">Total</span>
                                        <span className="text-[#6F4E37] text-3xl font-bold">${total.toFixed(2)}</span>
                                    </div>
                                </div>

                                <button className="w-full py-5 bg-[#6F4E37] text-white font-bold text-lg rounded-2xl hover:bg-[#5D4037] hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 group mb-4">
                                    Checkout <FaCreditCard className="group-hover:translate-x-1 transition-transform" />
                                </button>

                                <button
                                    onClick={clearCart}
                                    className="w-full py-3 text-[#A67B5B] font-bold text-sm hover:text-red-500 transition-colors border border-transparent hover:border-red-100 rounded-xl"
                                >
                                    Empty Cart
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

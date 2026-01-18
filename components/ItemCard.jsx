"use client";

import Link from "next/link";
import { FaShoppingCart, FaArrowRight, FaCheck } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const ItemCard = ({ item }) => {
    const { addToCart, cart } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    // Check if item is in cart
    useEffect(() => {
        setIsAdded(cart.some(cartItem => cartItem.id === item.id));
    }, [cart, item.id]);

    const handleAddToCart = () => {
        if (!isAdded) {
            addToCart(item);
            toast.success(`${item.name} added to cart!`, {
                icon: '☕',
            });
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 border border-[#E0D0C0] overflow-hidden group flex flex-col h-full">
            <div className="h-64 overflow-hidden relative">
                <img
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2607&auto=format&fit=crop";
                    }}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-[#6F4E37] font-bold shadow-md">
                    ${item.price.toFixed(2)}
                </div>
            </div>

            <div className="p-6 flex flex-col grow">
                <div className="mb-4 grow">
                    <h3 className="text-xl font-bold font-serif text-[#2C1810] mb-2">{item.name}</h3>
                    <p className="text-[#8D7A70] line-clamp-2">{item.description}</p>
                </div>

                <div className="flex gap-3 mt-auto">
                    <Link
                        href={`/items/${item.id}`}
                        className="flex-1 px-4 py-3 border-2 border-[#E0D0C0] text-[#6F4E37] font-bold rounded-xl hover:bg-[#F4E4BC]/30 hover:border-[#F4E4BC] transition-colors text-center flex items-center justify-center gap-2 text-sm"
                    >
                        View Details
                    </Link>
                    <button
                        onClick={handleAddToCart}
                        disabled={isAdded}
                        className={`flex-1 px-4 py-3 rounded-xl font-bold shadow-md transition-all text-sm flex items-center justify-center gap-2 ${isAdded
                                ? "bg-green-600/90 text-white cursor-default"
                                : "bg-[#6F4E37] text-white hover:bg-[#5D4037] hover:shadow-lg active:scale-95"
                            }`}
                    >
                        {isAdded ? (
                            <>
                                <FaCheck /> Added
                            </>
                        ) : (
                            <>
                                <FaShoppingCart /> Add Cart
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;

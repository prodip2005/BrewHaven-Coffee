"use client";

import { useState } from "react";
import ItemCard from "./ItemCard";

const ItemsList = ({ initialItems }) => {
    const [filter, setFilter] = useState("all");

    const filteredItems = initialItems.filter((item) => {
        if (filter === "all") return true;
        // Normalize item category to lowercase for comparison, allow fallback for old items
        const itemCategory = (item.category || "others").toLowerCase();
        return itemCategory === filter;
    });

    return (
        <>
            {/* Search/Filter Bar */}
            <div className="flex flex-wrap gap-4 justify-center mb-16">
                <button
                    onClick={() => setFilter("all")}
                    className={`px-8 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105 ${filter === "all"
                            ? "bg-[#6F4E37] text-white"
                            : "bg-white text-[#6F4E37] border-2 border-[#E0D0C0] hover:bg-[#6F4E37] hover:text-white hover:border-[#6F4E37]"
                        }`}
                >
                    All Items
                </button>
                <button
                    onClick={() => setFilter("coffee")}
                    className={`px-8 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105 ${filter === "coffee"
                            ? "bg-[#6F4E37] text-white"
                            : "bg-white text-[#6F4E37] border-2 border-[#E0D0C0] hover:bg-[#6F4E37] hover:text-white hover:border-[#6F4E37]"
                        }`}
                >
                    Coffee
                </button>
                <button
                    onClick={() => setFilter("others")}
                    className={`px-8 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105 ${filter === "others"
                            ? "bg-[#6F4E37] text-white"
                            : "bg-white text-[#6F4E37] border-2 border-[#E0D0C0] hover:bg-[#6F4E37] hover:text-white hover:border-[#6F4E37]"
                        }`}
                >
                    Others
                </button>
            </div>

            {filteredItems.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl shadow-soft">
                    <p className="text-2xl text-gray-400 font-serif">
                        No items found in this category.
                    </p>
                    <p className="text-gray-500 mt-2">Try a different filter!</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredItems.map((item) => (
                        <ItemCard key={item.id} item={item} />
                    ))}
                </div>
            )}
        </>
    );
};

export default ItemsList;

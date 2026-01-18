"use client";

import { useEffect, useState } from "react";
import ItemsList from "@/components/ItemsList";

export default function ItemsPage() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/items", { cache: "no-store" })
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((err) => {
                console.error("Error fetching items:", err);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7] text-[#6F4E37]">
                Loading...
            </div>
        );
    }

    return (
        <div className="py-16 bg-[#FDFBF7] min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#6F4E37] font-bold tracking-widest uppercase text-sm mb-2 block">
                        Our Collection
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold font-serif text-[#2C1810] mb-6">
                        Explore Our Menu
                    </h1>
                    <p className="text-[#5D4037] text-lg max-w-2xl mx-auto leading-relaxed">
                        From farm to cup, every sip is a journey. Discover our carefully curated selection.
                    </p>
                </div>

                <ItemsList initialItems={items} />
            </div>
        </div>
    );
}

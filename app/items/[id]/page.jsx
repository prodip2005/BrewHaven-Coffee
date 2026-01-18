"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function ItemDetailsPage({ params }) {
    const { id } = params;

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/items", { cache: "no-store" })
            .then((res) => res.json())
            .then((items) => {
                const found = items.find((i) => i.id === id);
                setItem(found || null);
            })
            .catch((err) => {
                console.error("Error fetching item:", err);
                setItem(null);
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center bg-[#FDFBF7] text-[#6F4E37]">
                Loading...
            </div>
        );
    }

    if (!item) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] bg-[#FDFBF7]">
                <h1 className="text-3xl font-bold mb-4 text-[#2C1810]">
                    Item Not Found
                </h1>
                <Link
                    href="/items"
                    className="flex items-center gap-2 text-[#6F4E37]"
                >
                    <FaArrowLeft /> Back to Menu
                </Link>
            </div>
        );
    }

    return (
        <div className="py-20 bg-[#FDFBF7] min-h-[90vh]">
            <div className="container mx-auto px-4 max-w-5xl">
                <Link
                    href="/items"
                    className="flex items-center gap-2 mb-8 text-[#6F4E37]"
                >
                    <FaArrowLeft /> Back to Menu
                </Link>

                <div className="grid md:grid-cols-2 gap-10 bg-white p-10 rounded-2xl shadow">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-[400px] object-cover rounded-xl"
                    />

                    <div>
                        <h1 className="text-4xl font-bold mb-4 text-[#2C1810]">
                            {item.name}
                        </h1>
                        <p className="text-2xl font-semibold mb-4 text-[#6F4E37]">
                            ${item.price.toFixed(2)}
                        </p>
                        <p className="text-gray-600">
                            {item.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

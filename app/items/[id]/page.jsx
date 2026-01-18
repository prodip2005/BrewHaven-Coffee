"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

export default function ItemDetailsPage() {
    const { id } = useParams(); // ✅ CORRECT WAY
   
    

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        fetch("/api/items", { cache: "no-store" })
            .then((res) => res.json())
            .then((items) => {
                const found = items.find(
                    (i) => String(i.id) === String(id)
                );
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
            <div className="min-h-[60vh] flex items-center justify-center">
                Loading...
            </div>
        );
    }

    if (!item) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-4">Item Not Found</h1>
                <Link href="/items" className="flex items-center gap-2">
                    <FaArrowLeft /> Back to Menu
                </Link>
            </div>
        );
    }

    return (
        <div className="py-20 bg-[#FDFBF7] min-h-screen">
            <div className="container mx-auto px-4 max-w-5xl">
                <Link href="/items" className="flex items-center gap-2 mb-8">
                    <FaArrowLeft /> Back to Menu
                </Link>

                <div className="grid md:grid-cols-2 gap-10 bg-white p-10 rounded-2xl shadow">
                    <div className="relative w-full h-[400px]">
                        <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover rounded-xl"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div>
                        <h1 className="text-4xl font-bold mb-4">
                            {item.name}
                        </h1>
                        <p className="text-2xl font-semibold mb-4">
                            ${Number(item.price).toFixed(2)}
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

export const dynamic = "force-dynamic";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

async function getItem(id) {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL;

        const res = await fetch(`${baseUrl}/api/items`, {
            cache: "no-store",
        });

        if (!res.ok) return null;

        const items = await res.json();
        return items.find((item) => item.id === id) || null;
    } catch (error) {
        console.error("Error fetching item:", error);
        return null;
    }
}

export default async function ItemDetailsPage({ params }) {
    const { id } = params;
    const item = await getItem(id);

    if (!item) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <h1 className="text-3xl font-bold mb-4">Item Not Found</h1>
                <Link href="/items" className="flex items-center gap-2 text-[#6F4E37]">
                    <FaArrowLeft /> Back to Menu
                </Link>
            </div>
        );
    }

    return (
        <div className="py-20 bg-[#FDFBF7] min-h-[90vh]">
            <div className="container mx-auto px-4 max-w-5xl">
                <Link href="/items" className="flex items-center gap-2 mb-8 text-[#6F4E37]">
                    <FaArrowLeft /> Back to Menu
                </Link>

                <div className="grid md:grid-cols-2 gap-10 bg-white p-10 rounded-2xl shadow">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-[400px] object-cover rounded-xl"
                    />

                    <div>
                        <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
                        <p className="text-2xl font-semibold mb-4">${item.price.toFixed(2)}</p>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

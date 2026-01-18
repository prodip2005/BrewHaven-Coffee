import { NextResponse } from "next/server";

// 🔥 Vercel cache পুরোপুরি বন্ধ
export const dynamic = "force-dynamic";

// ✅ In-memory dummy data
let items = [
    {
        id: "1",
        name: "Espresso",
        description: "Rich and bold single shot of coffee.",
        price: 3.5,
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=2070&auto=format&fit=crop",
        category: "coffee",
    },
    {
        id: "2",
        name: "Cappuccino",
        description: "Espresso with steamed milk and thick foam.",
        price: 4.5,
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=2070&auto=format&fit=crop",
        category: "coffee",
    },
    {
        id: "3",
        name: "Latte",
        description: "Smooth espresso mixed with steamed milk.",
        price: 4.75,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop",
        category: "coffee",
    },
    {
        id: "4",
        name: "Americano",
        description: "Espresso diluted with hot water.",
        price: 3.0,
        image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=2070&auto=format&fit=crop",
        category: "coffee",
    },
];

// 🔹 GET → all items OR single item by query
// /api/items
// /api/items?id=1
export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
        const item = items.find((i) => i.id === id);
        return NextResponse.json(item || null);
    }

    return NextResponse.json(items);
}

// 🔹 POST → add new item (memory only)
export async function POST(req) {
    try {
        const body = await req.json();
        const { name, price, image, description, category } = body;

        if (!name || price === undefined) {
            return NextResponse.json(
                { message: "Name and price required" },
                { status: 400 }
            );
        }

        const newItem = {
            id: Date.now().toString(),
            name,
            price: Number(price),
            image:
                image ||
                "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2070&auto=format&fit=crop",
            description: description || "",
            category: category || "others",
        };

        items.push(newItem);

        return NextResponse.json(newItem, { status: 201 });
    } catch (error) {
        console.error("POST /api/items error:", error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}

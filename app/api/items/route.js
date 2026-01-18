import { NextResponse } from "next/server";

// ✅ In-memory dummy data (Vercel-safe)
let  items = [
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
    {
        id: "5",
        name: "Mocha",
        description: "Espresso with chocolate and steamed milk.",
        price: 5.0,
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2070&auto=format&fit=crop",
        category: "coffee",
    },
    {
        id: "6",
        name: "Flat White",
        description: "Velvety microfoam milk with espresso.",
        price: 4.25,
        image: "https://images.unsplash.com/photo-1523942839745-7848d7a9c5fa?q=80&w=2070&auto=format&fit=crop",
        category: "coffee",
    },
    {
        id: "7",
        name: "Cold Brew",
        description: "Slow-steeped cold coffee, smooth and refreshing.",
        price: 4.0,
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2070&auto=format&fit=crop",
        category: "cold",
    },
    {
        id: "8",
        name: "Iced Latte",
        description: "Chilled espresso with cold milk and ice.",
        price: 4.5,
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2070&auto=format&fit=crop",
        category: "cold",
    },
    {
        id: "9",
        name: "Caramel Macchiato",
        description: "Sweet caramel with espresso and milk.",
        price: 5.25,
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=2070&auto=format&fit=crop",
        category: "special",
    },
    {
        id: "10",
        name: "Vanilla Latte",
        description: "Classic latte infused with vanilla syrup.",
        price: 4.95,
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2070&auto=format&fit=crop",
        category: "special",
    },
];


// GET all items
export async function GET() {
    return NextResponse.json(items);
}

// POST new item (temporary memory)
export async function POST(req) {
    try {
        const body = await req.json();
        const { name, price, image, description, category } = body;

        if (!name || !price) {
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
                "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=2070&auto=format&fit=crop",
            description: description || "",
            category: category || "others",
        };

        items.push(newItem);

        return NextResponse.json(newItem, { status: 201 });
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}

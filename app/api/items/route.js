import { NextResponse } from 'next/server';
import { getItems, saveItems } from '@/lib/data';

export async function GET() {
    const items = getItems();
    return NextResponse.json(items);
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, description, price, image, category } = body;

        // Basic validation
        if (!name || !price) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        const items = getItems();
        const newItem = {
            id: Date.now().toString(),
            name,
            description: description || "",
            price: parseFloat(price),
            image: image || "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=2070&auto=format&fit=crop",
            category: category || "others"
        };

        items.push(newItem);
        saveItems(items);

        return NextResponse.json(newItem, { status: 201 });
    } catch (error) {
        console.error("API POST Error:", error);
        return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
    }
}

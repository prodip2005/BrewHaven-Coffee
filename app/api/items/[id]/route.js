import { NextResponse } from 'next/server';
import { getItems, saveItems } from '@/lib/data';

export async function GET(request, { params }) {
    const { id } = await params;
    const items = getItems();
    const item = items.find((i) => i.id === id);

    if (!item) {
        return NextResponse.json({ message: 'Item not found' }, { status: 404 });
    }

    return NextResponse.json(item);
}

export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        const items = getItems();
        const filteredItems = items.filter((i) => i.id !== id);

        if (items.length === filteredItems.length) {
            return NextResponse.json({ message: 'Item not found' }, { status: 404 });
        }

        saveItems(filteredItems);
        return NextResponse.json({ message: 'Item deleted successfully' });
    } catch (error) {
        return NextResponse.json({ message: 'Error deleting item' }, { status: 500 });
    }
}

export async function PUT(request, { params }) {
    try {
        const { id } = await params;
        const body = await request.json();
        const { name, description, price, image, category } = body;

        const items = getItems();
        const index = items.findIndex((i) => i.id === id);

        if (index === -1) {
            return NextResponse.json({ message: 'Item not found' }, { status: 404 });
        }

        // Update fields
        items[index] = {
            ...items[index],
            name: name || items[index].name,
            description: description || items[index].description,
            price: price ? parseFloat(price) : items[index].price,
            image: image || items[index].image,
            category: category || items[index].category
        };

        saveItems(items);
        return NextResponse.json(items[index]);

    } catch (error) {
        console.error("API PUT Error:", error);
        return NextResponse.json({ message: 'Error updating item' }, { status: 500 });
    }
}

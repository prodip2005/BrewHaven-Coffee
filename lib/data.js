import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'items.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
}

// Initial Mock Data if file doesn't exist
if (!fs.existsSync(DATA_FILE)) {
    const initialData = [
        {
            id: "1",
            name: "Espresso",
            description: "Rich and bold single shot of coffee.",
            price: 3.50,
            image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "2",
            name: "Cappuccino",
            description: "Espresso with steamed milk and foam.",
            price: 4.50,
            image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "3",
            name: "Latte",
            description: "Creamy espresso with steamed milk.",
            price: 4.75,
            image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop"
        }
    ];
    fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2));
}

export const getItems = () => {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

export const saveItems = (items) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(items, null, 2));
};

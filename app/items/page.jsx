import ItemsList from "@/components/ItemsList";

// Fetch data function
async function getItems() {
    try {
        const res = await fetch("http://localhost:3000/api/items", { cache: "no-store" });
        if (!res.ok) {
            return [];
        }
        return res.json();
    } catch (error) {
        console.error("Error fetching items:", error);
        return [];
    }
}

export default async function ItemsPage() {
    const items = await getItems();

    return (
        <div className="py-16 bg-[#FDFBF7] min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#6F4E37] font-bold tracking-widest uppercase text-sm mb-2 block">Our Collection</span>
                    <h1 className="text-5xl md:text-6xl font-bold font-serif text-[#2C1810] mb-6">Explore Our Menu</h1>
                    <p className="text-[#5D4037] text-lg max-w-2xl mx-auto leading-relaxed">
                        From farm to cup, every sip is a journey. Discover our carefully curated selection of single-origin coffees and artisanal pastries.
                    </p>
                </div>

                <ItemsList initialItems={items} />
            </div>
        </div>
    );
}

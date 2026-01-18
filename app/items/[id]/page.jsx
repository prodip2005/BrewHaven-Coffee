import Link from "next/link";
import { FaArrowLeft, FaShoppingCart, FaStar, FaHeart } from "react-icons/fa";

// Fetch data function
async function getItem(id) {
    try {
        const res = await fetch(`http://localhost:3000/api/items/${id}`, { cache: "no-store" });
        if (!res.ok) {
            return null;
        }
        return res.json();
    } catch (error) {
        console.error("Error fetching item:", error);
        return null;
    }
}

export default async function ItemDetailsPage({ params }) {
    const { id } = await params;
    const item = await getItem(id);

    if (!item) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center bg-[#FDFBF7]">
                <h1 className="text-3xl font-bold mb-4 text-[#2C1810]">Item Not Found</h1>
                <Link href="/items" className="text-[#6F4E37] hover:underline flex items-center gap-2">
                    <FaArrowLeft /> Back to Menu
                </Link>
            </div>
        );
    }

    return (
        <div className="py-20 bg-[#FDFBF7] min-h-[90vh] flex items-center">
            <div className="container mx-auto px-4 max-w-6xl">
                <Link
                    href="/items"
                    className="inline-flex items-center gap-2 text-[#8D7A70] hover:text-[#6F4E37] mb-10 transition-colors font-medium text-lg group"
                >
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Menu
                </Link>

                <div className="bg-white rounded-[2rem] shadow-soft overflow-hidden flex flex-col md:flex-row border border-gray-100">
                    <div className="md:w-1/2 min-h-[500px] relative">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover absolute inset-0"
                        />
                    </div>

                    <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                        <div className="flex items-center gap-2 text-[#D4A373] mb-6">
                            <div className="flex text-xl"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                            <span className="text-gray-400 text-sm ml-2 font-medium tracking-wide border-l border-gray-300 pl-3">128 REVIEWS</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold font-serif text-[#2C1810] mb-6 leading-tight">
                            {item.name}
                        </h1>

                        <div className="text-4xl font-bold text-[#6F4E37] mb-8 font-serif">
                            ${item.price.toFixed(2)}
                        </div>

                        <p className="text-[#6D5A50] text-lg leading-relaxed mb-12 border-b border-gray-100 pb-10">
                            {item.description}
                            <br /><br />
                            Made with high-quality ingredients and sourced from sustainable farms. The perfect balance of flavor and aroma to brighten your day.
                        </p>

                        <div className="flex gap-6">
                            <button className="flex-1 bg-[#2C1810] text-white py-4 px-8 rounded-full font-bold text-lg hover:bg-[#6F4E37] transition-all shadow-lg flex items-center justify-center gap-3 hover:scale-[1.02]">
                                <FaShoppingCart /> Add to Cart
                            </button>
                            <button className="w-16 h-16 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-500 hover:bg-red-50 transition-all">
                                <FaHeart className="text-2xl" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

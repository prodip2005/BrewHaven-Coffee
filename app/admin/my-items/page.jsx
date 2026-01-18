"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaEdit, FaTrash, FaPlus, FaSearch } from "react-icons/fa";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export default function MyItemsPage() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();

    useEffect(() => {
        // Auth check
        const allCookies = document.cookie.split(';');
        const authCookie = allCookies.find(c => c.trim().startsWith('auth='));
        if (!authCookie) {
            router.push("/login");
            return;
        }

        fetchItems();
    }, [router]);

    const fetchItems = async () => {
        try {
            const res = await fetch("/api/items");
            if (res.ok) {
                const data = await res.json();
                setItems(data);
            }
        } catch (error) {
            console.error("Failed to fetch items", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "This item will be removed from your menu forever.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#6F4E37",
            cancelButtonColor: "#8D7A70",
            confirmButtonText: "Yes, delete it!",
            background: "#FDFBF7",
            color: "#2C1810",
            iconColor: "#D4A373",
        });

        if (!result.isConfirmed) return;

        try {
            const res = await fetch(`/api/items/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                // Optimistic update
                setItems(items.filter(item => item.id !== id));
                toast.success("Item deleted successfully!");
            } else {
                toast.error("Failed to delete item.");
            }
        } catch (error) {
            console.error("Error deleting item:", error);
            toast.error("An error occurred while deleting the item.");
        }
    };

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7] text-[#6F4E37]">Loading...</div>;

    return (
        <div className="min-h-screen bg-[#FDFBF7] py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold font-serif text-[#2C1810]">My Items</h1>
                        <p className="text-[#8D7A70] mt-1">Manage your coffee and menu inventory.</p>
                    </div>
                    <Link href="/admin/add-item" className="bg-[#6F4E37] text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-[#5D4037] transition-all flex items-center gap-2">
                        <FaPlus /> Add New Item
                    </Link>
                </div>

                {/* Search Bar */}
                <div className="relative mb-8">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FaSearch className="text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search items..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-12 w-full p-4 rounded-xl border border-[#E0D0C0] shadow-sm focus:ring-[#6F4E37] focus:border-[#6F4E37] bg-white"
                    />
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-[#E0D0C0] overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-[#F4E4BC]/30 border-b border-[#E0D0C0] text-[#2C1810]">
                                <tr>
                                    <th className="p-6 font-bold font-serif">Product</th>
                                    <th className="p-6 font-bold font-serif">Category</th>
                                    <th className="p-6 font-bold font-serif">Price</th>
                                    <th className="p-6 font-bold font-serif text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredItems.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="p-8 text-center text-gray-500">No items found.</td>
                                    </tr>
                                ) : (
                                    filteredItems.map(item => (
                                        <tr key={item.id} className="hover:bg-gray-50 transition-colors group">
                                            <td className="p-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-[#2C1810]">{item.name}</p>
                                                        <p className="text-xs text-gray-500 max-w-[200px] truncate">{item.description}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-6 text-sm">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${item.category === 'coffee' ? 'bg-[#6F4E37]/10 text-[#6F4E37]' : 'bg-[#D4A373]/10 text-[#D4A373]'}`}>
                                                    {item.category || 'others'}
                                                </span>
                                            </td>
                                            <td className="p-6 font-bold text-[#6F4E37]">${item.price.toFixed(2)}</td>
                                            <td className="p-6 text-right">
                                                <div className="flex items-center justify-end gap-3">
                                                    <Link
                                                        href={`/admin/edit-item/${item.id}`}
                                                        className="p-2 text-gray-400 hover:text-[#6F4E37] hover:bg-[#6F4E37]/10 rounded-lg transition-colors"
                                                        title="Edit"
                                                    >
                                                        <FaEdit />
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(item.id)}
                                                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                        title="Delete"
                                                    >
                                                        <FaTrash />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

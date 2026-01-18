"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { FaCoffee, FaImage, FaTag, FaAlignLeft, FaDollarSign, FaList, FaExclamationCircle } from "react-icons/fa";
import toast from "react-hot-toast";

export default function EditItemPage({ params }) {
    const { id } = use(params);
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
        category: "coffee"
    });
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [imagePreviewError, setImagePreviewError] = useState(false);

    useEffect(() => {
        // Client-side protection
        const allCookies = document.cookie.split(';');
        const authCookie = allCookies.find(c => c.trim().startsWith('auth='));

        if (!authCookie) {
            router.push("/login");
            return;
        }

        // Fetch existing item
        const fetchItem = async () => {
            try {
                const res = await fetch(`/api/items/${id}`);
                if (res.ok) {
                    const data = await res.json();
                    setFormData({
                        name: data.name,
                        description: data.description,
                        price: data.price,
                        image: data.image,
                        category: data.category || "others"
                    });
                } else {
                    toast.error("Item not found.");
                }
            } catch (error) {
                console.error("Error fetching item:", error);
                toast.error("Error loading item data.");
            } finally {
                setLoading(false);
            }
        };

        fetchItem();
    }, [id, router]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (name === "image") {
            setImagePreviewError(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const res = await fetch(`/api/items/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                toast.success("Item updated successfully! ☕");
                setTimeout(() => {
                    router.push("/admin/my-items");
                }, 1500);
            } else {
                toast.error("Failed to update item. Please try again.");
            }
        } catch (error) {
            console.error("Error updating item:", error);
            toast.error("An error occurred while updating the item.");
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">Loading...</div>;

    return (
        <div className="py-12 bg-[#FDFBF7] min-h-screen">
            <div className="container mx-auto px-4 max-w-2xl">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-[#E0D0C0]">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold font-serif text-[#2C1810]">Edit Item</h1>
                        <p className="text-[#8D7A70] mt-2">Update product details.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-[#2C1810] mb-1">Item Name</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaCoffee className="text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="pl-10 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-[#6F4E37] focus:border-[#6F4E37] p-3 border bg-gray-50"
                                    placeholder="e.g. Vanilla Latte"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-[#2C1810] mb-1">Category</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaList className="text-gray-400" />
                                    </div>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="pl-10 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-[#6F4E37] focus:border-[#6F4E37] p-3 border bg-gray-50"
                                    >
                                        <option value="coffee">Coffee</option>
                                        <option value="others">Others (Pastry, Food, etc.)</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-[#2C1810] mb-1">Price ($)</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaDollarSign className="text-gray-400" />
                                    </div>
                                    <input
                                        type="number"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        required
                                        step="0.01"
                                        min="0"
                                        className="pl-10 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-[#6F4E37] focus:border-[#6F4E37] p-3 border bg-gray-50"
                                        placeholder="4.50"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-[#2C1810] mb-1">Image URL</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaImage className="text-gray-400" />
                                    </div>
                                    <input
                                        type="url"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleChange}
                                        className="pl-10 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-[#6F4E37] focus:border-[#6F4E37] p-3 border bg-gray-50"
                                        placeholder="https://... (Leave empty for default)"
                                    />
                                </div>
                            </div>

                            {/* Image Preview */}
                            {formData.image && (
                                <div className="mt-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                                    <p className="text-xs font-bold text-[#6F4E37] mb-2">Image Preview:</p>
                                    <div className="relative h-48 w-full rounded-md overflow-hidden bg-white flex items-center justify-center">
                                        <img
                                            src={formData.image}
                                            alt="Preview"
                                            className="h-full w-full object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                setImagePreviewError(true);
                                                e.target.style.display = 'none';
                                            }}
                                        />
                                        {imagePreviewError && (
                                            <div className="flex flex-col items-center text-red-400 p-4 text-center">
                                                <FaExclamationCircle className="text-2xl mb-2" />
                                                <span className="text-sm">Unable to load image. URL invalid.</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-[#2C1810] mb-1">Description</label>
                            <div className="relative">
                                <div className="absolute top-3 left-3 pointer-events-none">
                                    <FaAlignLeft className="text-gray-400" />
                                </div>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows={4}
                                    className="pl-10 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-[#6F4E37] focus:border-[#6F4E37] p-3 border bg-gray-50"
                                    placeholder="Describe the taste and ingredients..."
                                />
                            </div>
                        </div>

                        <div className="pt-4 flex gap-4">
                            <button
                                type="button"
                                onClick={() => router.push('/admin/my-items')}
                                className="flex-1 py-3 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-bold text-gray-700 bg-white hover:bg-gray-50 transition-all"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={submitting}
                                className={`flex-1 flex justify-center py-3 px-4 border border-transparent rounded-full shadow-lg text-sm font-bold text-white bg-[#6F4E37] hover:bg-[#5D4037] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6F4E37] transition-all transform hover:scale-[1.02] ${submitting ? "opacity-70 cursor-not-allowed" : ""}`}
                            >
                                {submitting ? "Saving..." : "Save Changes"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

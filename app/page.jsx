import Link from "next/link";
import { FaArrowRight, FaLeaf, FaMugHot, FaAward, FaCoffee, FaHeart } from "react-icons/fa";

export default function Home() {
    const marqueeItems = [
        { name: 'Cappuccino', price: 4.50, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=2070&auto=format&fit=crop" },
        { name: 'Latte', price: 5.25, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop" },
        { name: 'Cold Brew', price: 4.25, image: "https://images.unsplash.com/photo-1517701604599-bb29b5c7fa69?q=80&w=2670&auto=format&fit=crop" },
        { name: 'Espresso', price: 3.50, image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=2070&auto=format&fit=crop" },
        { name: 'Mocha', price: 4.95, image: "https://images.unsplash.com/photo-1555507036-ab1f40388085?q=80&w=2526&auto=format&fit=crop" },
        { name: 'Matcha', price: 5.50, image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=2671&auto=format&fit=crop" },
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans bg-[#FDFBF7] overflow-x-hidden">
            {/* Section 1: Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center text-center bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat bg-fixed">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-[#2C1810]/80"></div>
                <div className="relative z-10 px-4 max-w-5xl mx-auto space-y-8 animate-fade-in-up">
                    <span className="text-[#F4E4BC] font-serif italic text-2xl tracking-wide">Welcome to BrewHaven</span>
                    <h1 className="text-6xl md:text-8xl font-bold text-white font-serif leading-tight drop-shadow-lg">
                        Savor the Moments
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
                        Experience the art of coffee with our handcrafted blends. <br />Brewed to perfection, served with love in every cup.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                        <Link
                            href="/items"
                            className="px-10 py-4 bg-[#6F4E37] text-white font-bold rounded-full hover:bg-[#5D4037] transition-all transform hover:scale-105 shadow-lg shadow-[#6F4E37]/40 flex items-center justify-center gap-2 group"
                        >
                            Order Now <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#about"
                            className="px-10 py-4 bg-transparent backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/10 transition-all border-2 border-white/30 flex items-center justify-center"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section 2: Features/Benefits */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#F4E4BC]/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4A373]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="p-10 bg-[#FDFBF7] rounded-3xl shadow-soft hover:shadow-hover transition-all duration-300 border border-[#EAE0D5] group">
                            <div className="w-20 h-20 mx-auto bg-[#6F4E37]/10 rounded-full flex items-center justify-center text-[#6F4E37] mb-8 group-hover:bg-[#6F4E37] group-hover:text-white transition-colors duration-300">
                                <FaLeaf className="text-4xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 font-serif text-[#2C1810]">Organic Beans</h3>
                            <p className="text-[#6D5A50] leading-relaxed">Sourced directly from sustainable farms, ensuring the highest quality while supporting fair trade practices.</p>
                        </div>
                        <div className="p-10 bg-[#FDFBF7] rounded-3xl shadow-soft hover:shadow-hover transition-all duration-300 border border-[#EAE0D5] group">
                            <div className="w-20 h-20 mx-auto bg-[#6F4E37]/10 rounded-full flex items-center justify-center text-[#6F4E37] mb-8 group-hover:bg-[#6F4E37] group-hover:text-white transition-colors duration-300">
                                <FaMugHot className="text-4xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 font-serif text-[#2C1810]">Freshly Roasted</h3>
                            <p className="text-[#6D5A50] leading-relaxed">Small batch roasting daily to preserve the rich aroma and distinct flavor profiles of our beans.</p>
                        </div>
                        <div className="p-10 bg-[#FDFBF7] rounded-3xl shadow-soft hover:shadow-hover transition-all duration-300 border border-[#EAE0D5] group">
                            <div className="w-20 h-20 mx-auto bg-[#6F4E37]/10 rounded-full flex items-center justify-center text-[#6F4E37] mb-8 group-hover:bg-[#6F4E37] group-hover:text-white transition-colors duration-300">
                                <FaAward className="text-4xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 font-serif text-[#2C1810]">Award Winning</h3>
                            <p className="text-[#6D5A50] leading-relaxed">Recognized globally for excellence in brewing, service, and our dedication to coffee culture.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: About Us (Text + Image) */}
            <section id="about" className="py-24 bg-[#FDFBF7]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 relative">
                            <div className="absolute top-4 left-4 w-full h-full border-2 border-[#D4A373] rounded-3xl z-0 transform -translate-x-4 -translate-y-4"></div>
                            <img
                                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
                                alt="Barista pouring coffee"
                                className="rounded-3xl shadow-2xl object-cover h-[500px] w-full relative z-10"
                            />
                        </div>
                        <div className="lg:w-1/2 space-y-8">
                            <span className="text-[#6F4E37] font-bold tracking-widest uppercase text-sm">Our Heritage</span>
                            <h2 className="text-5xl font-bold font-serif text-[#2C1810] leading-tight">Every Cup Tells a Story</h2>
                            <p className="text-lg text-[#6D5A50] leading-relaxed">
                                Founded in 2010, BrewHaven began with a simple mission: to bring people together over great coffee. What started as a small cart has grown into a community hub where passion meets perfection.
                            </p>
                            <p className="text-lg text-[#6D5A50] leading-relaxed">
                                We believe that every cup tells a story. From the farmer who tends the crop to the barista who crafts your drink, we honor every step of the journey.
                            </p>
                            <button className="px-8 py-3 text-[#6F4E37] overflow-hidden relative group font-bold">
                                <span className="relative z-10 flex items-center gap-2">Read Full Story <FaArrowRight /></span>
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6F4E37] transition-all duration-300 group-hover:w-full"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Popular Menu Marquee */}
            <section className="py-24 bg-[#2C1810] text-[#F4E4BC] overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-[#D4A373] font-bold tracking-widest uppercase text-sm">Menu Highlights</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-serif text-white">Customer Favorites</h2>
                    </div>

                    <div className="relative w-full overflow-hidden group">
                        {/* Gradient Overlays for Fade Effect */}
                        <div className="absolute top-0 left-0 h-full w-20 z-10 bg-gradient-to-r from-[#2C1810] to-transparent pointer-events-none"></div>
                        <div className="absolute top-0 right-0 h-full w-20 z-10 bg-gradient-to-l from-[#2C1810] to-transparent pointer-events-none"></div>

                        {/* Flex container holding the two carriages */}
                        <div className="flex">
                            {/* Carriage 1 */}
                            <div className="flex gap-8 animate-loop-scroll min-w-full shrink-0 items-center justify-around pr-8 group-hover:paused">
                                {marqueeItems.map((item, i) => (
                                    <div key={i} className="flex-shrink-0 w-72 bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 group/card cursor-pointer hover:bg-white/10 transition-all duration-300">
                                        <div className="h-64 relative overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700 opacity-90 group-hover/card:opacity-100"
                                            />
                                        </div>
                                        <div className="p-6 text-center">
                                            <h3 className="font-bold text-xl mb-2 font-serif text-white">{item.name}</h3>
                                            <span className="text-[#D4A373] font-bold text-lg">${item.price.toFixed(2)}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Carriage 2 (Exact Duplicate) */}
                            <div className="flex gap-8 animate-loop-scroll min-w-full shrink-0 items-center justify-around pr-8 group-hover:paused" aria-hidden="true">
                                {marqueeItems.map((item, i) => (
                                    <div key={i} className="flex-shrink-0 w-72 bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 group/card cursor-pointer hover:bg-white/10 transition-all duration-300">
                                        <div className="h-64 relative overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700 opacity-90 group-hover/card:opacity-100"
                                            />
                                        </div>
                                        <div className="p-6 text-center">
                                            <h3 className="font-bold text-xl mb-2 font-serif text-white">{item.name}</h3>
                                            <span className="text-[#D4A373] font-bold text-lg">${item.price.toFixed(2)}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-16">
                        <Link href="/items" className="inline-block px-10 py-4 border-2 border-[#D4A373] text-[#D4A373] font-bold rounded-full hover:bg-[#D4A373] hover:text-[#2C1810] transition-colors">
                            View Full Menu
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section 5: Statistics/Proof */}
            <section className="py-20 bg-[#6F4E37]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-[#F4E4BC]/20">
                        <div className="p-4">
                            <div className="text-5xl font-bold mb-3 text-white font-serif">15k+</div>
                            <div className="text-[#F4E4BC] uppercase tracking-wider text-sm font-medium">Happy Customers</div>
                        </div>
                        <div className="p-4">
                            <div className="text-5xl font-bold mb-3 text-white font-serif">50+</div>
                            <div className="text-[#F4E4BC] uppercase tracking-wider text-sm font-medium">Coffee Varieties</div>
                        </div>
                        <div className="p-4">
                            <div className="text-5xl font-bold mb-3 text-white font-serif">12</div>
                            <div className="text-[#F4E4BC] uppercase tracking-wider text-sm font-medium">Years Experience</div>
                        </div>
                        <div className="p-4">
                            <div className="text-5xl font-bold mb-3 text-white font-serif">3</div>
                            <div className="text-[#F4E4BC] uppercase tracking-wider text-sm font-medium">Locations</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: Testimonials */}
            <section className="py-24 bg-[#FDFBF7] relative">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-center font-serif text-[#2C1810] mb-20">What People Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="bg-white p-10 rounded-3xl shadow-soft border border-gray-100 relative">
                            <FaCoffee className="text-4xl text-[#F4E4BC] absolute top-8 right-8" />
                            <p className="text-[#6D5A50] italic mb-8 text-lg">"Absolute best mocha I've ever had. The atmosphere is just perfect for working or catching up with friends. The staff really knows their stuff!"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden">
                                    <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User" />
                                </div>
                                <div>
                                    <div className="font-bold text-[#2C1810] text-lg">Sarah Jenkins</div>
                                    <div className="text-sm text-[#A67B5B]">Regular Customer</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-soft border border-gray-100 relative">
                            <FaCoffee className="text-4xl text-[#F4E4BC] absolute top-8 right-8" />
                            <p className="text-[#6D5A50] italic mb-8 text-lg">"The single-origin pour over was life changing. I travel across the city just for their seasonal blends. Highly recommend for any serious coffee lover."</p>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden">
                                    <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" />
                                </div>
                                <div>
                                    <div className="font-bold text-[#2C1810] text-lg">Mike Thompson</div>
                                    <div className="text-sm text-[#A67B5B]">Coffee Enthusiast</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7: Newsletter/CTA */}
            <section className="py-24 bg-[#2C1810] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
                    <FaHeart className="text-5xl text-[#D4A373] mx-auto mb-8 animate-pulse" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Join Our Coffee Club</h2>
                    <p className="text-gray-300 mb-10 text-lg">Subscribe to get 10% off your first order and stay updated on our latest blends, brewing workshops, and exclusive events.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="px-8 py-4 rounded-full text-[#2C1810] focus:outline-none focus:ring-4 focus:ring-[#D4A373]/50 w-full sm:w-96 text-lg"
                        />
                        <button className="px-10 py-4 bg-[#6F4E37] text-white font-bold rounded-full hover:bg-[#D4A373] hover:text-[#2C1810] transition-all shadow-lg text-lg">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

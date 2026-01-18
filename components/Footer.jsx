import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaCoffee } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#1E100A] text-[#E0D0C0] py-16 mt-auto border-t border-[#6F4E37]/30">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-serif text-[#F4E4BC] hover:text-white transition-colors">
                            <FaCoffee className="text-3xl" />
                            <span>BrewHaven</span>
                        </Link>
                        <p className="text-sm leading-relaxed text-[#A67B5B]">
                            Crafting the perfect cup since 2010. We source the finest beans from around the world to bring you an unforgettable coffee experience.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-[#F4E4BC] mb-6 font-serif">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="hover:text-[#F4E4BC] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#6F4E37] rounded-full"></span>Home</Link></li>
                            <li><Link href="/items" className="hover:text-[#F4E4BC] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#6F4E37] rounded-full"></span>Our Menu</Link></li>
                            <li><Link href="#about" className="hover:text-[#F4E4BC] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#6F4E37] rounded-full"></span>About Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-[#F4E4BC] mb-6 font-serif">Contact Us</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex gap-3">
                                <span className="text-[#6F4E37] font-bold">A.</span>
                                123 Coffee Lane, Brew City
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[#6F4E37] font-bold">E.</span>
                                <a href="mailto:hello@brewhaven.com" className="hover:text-[#F4E4BC] transition-colors">hello@brewhaven.com</a>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[#6F4E37] font-bold">P.</span>
                                +1 (555) 123-4567
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-lg font-bold text-[#F4E4BC] mb-6 font-serif">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-11 h-11 rounded-full bg-[#2C1810] border border-[#6F4E37]/50 flex items-center justify-center hover:bg-[#6F4E37] hover:text-white hover:border-[#6F4E37] transition-all group">
                                <FaFacebook className="text-lg group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-11 h-11 rounded-full bg-[#2C1810] border border-[#6F4E37]/50 flex items-center justify-center hover:bg-[#6F4E37] hover:text-white hover:border-[#6F4E37] transition-all group">
                                <FaTwitter className="text-lg group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-11 h-11 rounded-full bg-[#2C1810] border border-[#6F4E37]/50 flex items-center justify-center hover:bg-[#6F4E37] hover:text-white hover:border-[#6F4E37] transition-all group">
                                <FaInstagram className="text-lg group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-11 h-11 rounded-full bg-[#2C1810] border border-[#6F4E37]/50 flex items-center justify-center hover:bg-[#6F4E37] hover:text-white hover:border-[#6F4E37] transition-all group">
                                <FaLinkedin className="text-lg group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#6F4E37]/20 pt-8 text-center text-sm text-[#8D7A70] flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} BrewHaven Coffee Shop. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[#F4E4BC] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#F4E4BC] transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

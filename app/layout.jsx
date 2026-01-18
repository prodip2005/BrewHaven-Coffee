import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "BrewHaven Coffee",
    description: "Experience the art of coffee.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-[var(--background)] text-[var(--foreground)]`}>
                <CartProvider>
                    <Toaster
                        position="top-right"
                        toastOptions={{
                            duration: 3000,
                            style: {
                                background: '#2C1810',
                                color: '#F4E4BC',
                                fontWeight: 'bold',
                                borderRadius: '12px',
                                padding: '16px 24px',
                            },
                            success: {
                                iconTheme: {
                                    primary: '#D4A373',
                                    secondary: '#2C1810',
                                },
                            },
                        }}
                    />
                    <Navbar />
                    <main className="min-h-screen pt-[88px]">
                        {children}
                    </main>
                    <Footer />
                </CartProvider>
            </body>
        </html>
    );
}

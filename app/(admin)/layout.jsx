import { Inter } from "next/font/google";
import "../globals.css"; // Ensure this is included for Tailwind
import Navbar from "@/components/AdminComponents/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Admin Panel",
    description: "Manage your admin dashboard",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function AdminLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}

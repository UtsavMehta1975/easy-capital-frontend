import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TawkTo from "@/components/TawkTo";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
    title: "EasyCapital",
    description: "Unlock the financial support your business deserves! Whether you're an MSME or an aspiring entrepreneur, we offer customized solutions to help you thrive. Start your journey to success today!",
    icons: {
        icon: "/favicon.ico",
    }
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
                <TawkTo />
            </body>
        </html>
    );
}

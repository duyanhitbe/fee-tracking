"use client"
import {Inter} from "next/font/google";
import "./globals.css";
import {Header} from "@app/components/Header";
import {Footer} from "@app/components/Footer";
import {AppContextProvider} from "@app/contexts/AppContext";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <title>Fee Tracking</title>
        <body className={inter.className}>
        <AppContextProvider>
            <Header/>
            {children}
            <Footer/>
        </AppContextProvider>
        </body>
        </html>
    );
}

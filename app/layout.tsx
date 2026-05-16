import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
    display: "swap",
});

const display = Fraunces({
    variable: "--font-display",
    subsets: ["latin"],
    weight: "variable",
    style: ["normal", "italic"],
    display: "swap",
    axes: ["SOFT", "WONK", "opsz"],
});

const mono = JetBrains_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
    weight: ["400", "500"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Thomas Weinek — Sprecher",
    description:
        "Professionelle Sprecher für Werbung, Dokumentationen, Hörbücher und Image-Filme. Stimmen, die Bilder im Kopf entstehen lassen.",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="de"
            className={`${inter.variable} ${display.variable} ${mono.variable} antialiased`}
        >
            <body className="bg-bg text-fg min-h-screen selection:bg-accent/30 selection:text-fg">
                {children}
            </body>
        </html>
    );
}

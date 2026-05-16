import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
    display: "swap",
});

const serif = Instrument_Serif({
    variable: "--font-display",
    subsets: ["latin"],
    weight: "400",
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
            className={`${inter.variable} ${serif.variable} antialiased`}
        >
            <body className="bg-bg text-fg min-h-screen selection:bg-accent/30 selection:text-fg">
                {children}
            </body>
        </html>
    );
}

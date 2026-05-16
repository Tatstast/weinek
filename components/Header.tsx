"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { nav, site } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled ? "py-3" : "py-5"
            )}
        >
            <Container>
                <div
                    className={cn(
                        "flex items-center justify-between gap-6 rounded-full border px-5 py-3 backdrop-blur-xl transition-all duration-500",
                        scrolled
                            ? "border-border-strong/60 bg-bg/70 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
                            : "border-border/40 bg-bg/30"
                    )}
                >
                    <a
                        href="#hero"
                        className="font-display text-xl tracking-tight text-fg"
                    >
                        {site.name}
                        <span className="ml-2 text-fg-dim text-sm tracking-widest uppercase">
                            {site.tagline}
                        </span>
                    </a>

                    <nav className="hidden md:flex items-center gap-8">
                        {nav.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-sm text-fg-muted hover:text-fg transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="#kontakt"
                            className="text-sm font-medium text-bg bg-accent hover:bg-accent-hover px-5 py-2.5 rounded-full transition-colors"
                        >
                            Kontakt
                        </a>
                    </nav>

                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-fg p-1.5"
                        aria-label="Menü"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {open && (
                    <div className="md:hidden mt-3 rounded-3xl border border-border-strong/60 bg-bg-elev/95 backdrop-blur-xl p-3">
                        {nav.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="block px-4 py-3 rounded-2xl text-fg-muted hover:bg-bg-card hover:text-fg transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="#kontakt"
                            onClick={() => setOpen(false)}
                            className="block mt-1 px-4 py-3 rounded-2xl bg-accent text-bg text-center font-medium"
                        >
                            Kontakt
                        </a>
                    </div>
                )}
            </Container>
        </header>
    );
}

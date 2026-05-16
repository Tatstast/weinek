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
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "bg-bg/80 backdrop-blur-xl border-b border-border-strong/70"
                    : "bg-transparent border-b border-transparent"
            )}
        >
            <Container>
                <div className="flex items-center justify-between gap-6 py-5">
                    {/* Logo */}
                    <a href="#hero" className="flex items-center gap-3 group">
                        <span className="onair-dot" aria-hidden />
                        <span className="font-display text-xl tracking-tight text-fg">
                            {site.name}
                        </span>
                        <span className="hidden sm:inline mono-label">
                            / {site.tagline}
                        </span>
                    </a>

                    {/* Center nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {nav.map((item, i) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="group relative px-4 py-2 text-sm text-fg-muted hover:text-fg transition-colors"
                            >
                                <span className="mono-label mr-1.5 text-fg-dim group-hover:text-accent transition-colors">
                                    0{i + 1}
                                </span>
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* CTA */}
                    <a
                        href="#kontakt"
                        className="hidden md:inline-flex items-center gap-2 text-sm text-fg hover:text-accent transition-colors"
                    >
                        <span>Kontakt</span>
                        <span className="mono-label">→</span>
                    </a>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-fg p-1.5"
                        aria-label="Menü"
                    >
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </Container>

            {open && (
                <div className="md:hidden border-t border-border-strong/60 bg-bg-elev/95 backdrop-blur-xl">
                    <Container>
                        <div className="py-4 space-y-1">
                            {nav.map((item, i) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center justify-between py-3 border-b border-border/40 last:border-0 text-fg-muted hover:text-fg"
                                >
                                    <span className="flex items-center gap-3">
                                        <span className="mono-label text-fg-dim">
                                            0{i + 1}
                                        </span>
                                        {item.label}
                                    </span>
                                    <span className="mono-label">→</span>
                                </a>
                            ))}
                            <a
                                href="#kontakt"
                                onClick={() => setOpen(false)}
                                className="block py-4 text-accent font-medium"
                            >
                                Kontakt aufnehmen →
                            </a>
                        </div>
                    </Container>
                </div>
            )}
        </header>
    );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./Container";
import { hero, site } from "@/lib/data";

export function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col overflow-hidden"
        >
            {/* Background image — heavily desaturated and darkened */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url(/images/background-1.jpg)",
                        filter: "saturate(0.6) brightness(0.45)",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-bg/40" />
                <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-transparent to-bg" />
            </div>

            {/* Grain overlay */}
            <div
                className="absolute inset-0 z-[1] opacity-[0.07] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>\")",
                }}
            />

            {/* Soft accent glow */}
            <div className="absolute top-1/3 -left-32 w-[700px] h-[700px] rounded-full bg-accent/[0.08] blur-[200px] z-0" />

            {/* Top tactical bar */}
            <div className="relative z-10 pt-28 md:pt-32">
                <Container>
                    <div className="flex items-center justify-between border-b border-border-strong/40 pb-4">
                        <div className="flex items-center gap-6">
                            <span className="flex items-center gap-2.5">
                                <span className="onair-dot" />
                                <span className="mono-label">AUF SENDUNG</span>
                            </span>
                            <span className="hidden sm:inline mono-label text-fg-dim">
                                EST. 2014
                            </span>
                            <span className="hidden md:inline mono-label text-fg-dim">
                                48.2°N · WIEN
                            </span>
                        </div>
                        <span className="mono-label text-fg-dim">
                            <span className="text-accent">●</span> REC · 04 STIMMEN
                        </span>
                    </div>
                </Container>
            </div>

            {/* Hauptinhalt */}
            <div className="relative z-10 flex-1 flex items-center py-16 md:py-24">
                <Container>
                    <div className="grid grid-cols-12 gap-8 items-end">
                        <div className="col-span-12 lg:col-span-9">
                            <motion.p
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mono-label bracket text-accent mb-10"
                            >
                                {hero.eyebrow}
                            </motion.p>

                            <motion.h1
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.93]"
                            >
                                <span className="block">{hero.headline[0]}</span>
                                <span className="block italic text-fg-muted">
                                    {hero.headline[1]}
                                </span>
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="hidden lg:flex col-span-3 flex-col items-end gap-3 text-right"
                        >
                            <span className="mono-label">{site.name}</span>
                            <span className="wave text-accent">
                                <span /><span /><span /><span /><span /><span /><span /><span /><span />
                            </span>
                            <span className="mono-data text-xs text-fg-dim">
                                44.1kHz · 24bit · 192kbps
                            </span>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.45 }}
                        className="mt-16 grid grid-cols-12 gap-8 items-end"
                    >
                        <p className="col-span-12 md:col-span-6 lg:col-span-5 text-fg-muted leading-relaxed">
                            {hero.sub}
                        </p>

                        <div className="col-span-12 md:col-span-6 lg:col-span-7 lg:col-start-6 flex flex-wrap items-center gap-6 lg:justify-end">
                            <a
                                href={hero.ctaPrimary.href}
                                className="group inline-flex items-center gap-4 text-fg hover:text-accent transition-colors"
                            >
                                <span className="mono-label text-fg-dim">01</span>
                                <span className="font-display text-lg">
                                    {hero.ctaPrimary.label}
                                </span>
                                <span className="w-10 h-10 border border-border-strong group-hover:border-accent group-hover:bg-accent group-hover:text-bg flex items-center justify-center transition-all">
                                    <ArrowUpRight size={16} strokeWidth={1.8} />
                                </span>
                            </a>

                            <a
                                href={hero.ctaSecondary.href}
                                className="group inline-flex items-center gap-4 text-fg-muted hover:text-fg transition-colors"
                            >
                                <span className="mono-label text-fg-dim">02</span>
                                <span className="font-display text-lg italic">
                                    {hero.ctaSecondary.label}
                                </span>
                                <span className="wave text-accent group-hover:text-fg">
                                    <span /><span /><span /><span /><span />
                                </span>
                            </a>
                        </div>
                    </motion.div>
                </Container>
            </div>

            {/* Bottom metrics row */}
            <div className="relative z-10 pb-10">
                <Container>
                    <div className="flex flex-wrap items-end justify-between gap-6 border-t border-border-strong/40 pt-6">
                        <div className="flex items-center gap-8">
                            <div>
                                <span className="mono-label block text-fg-dim mb-1">
                                    Werbespots
                                </span>
                                <span className="mono-data text-2xl text-fg">150+</span>
                            </div>
                            <div className="hidden sm:block w-px h-10 bg-border-strong" />
                            <div className="hidden sm:block">
                                <span className="mono-label block text-fg-dim mb-1">
                                    Erfahrung
                                </span>
                                <span className="mono-data text-2xl text-fg">10y</span>
                            </div>
                            <div className="hidden md:block w-px h-10 bg-border-strong" />
                            <div className="hidden md:block">
                                <span className="mono-label block text-fg-dim mb-1">
                                    Zufriedenheit
                                </span>
                                <span className="mono-data text-2xl text-fg">100%</span>
                            </div>
                        </div>
                        <span className="mono-label text-fg-dim">
                            ↓ &nbsp; HÖRBEISPIELE UNTEN
                        </span>
                    </div>
                </Container>
            </div>
        </section>
    );
}

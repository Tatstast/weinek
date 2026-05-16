"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { Container } from "./Container";
import { hero } from "@/lib/data";

export function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20"
        >
            {/* Background image with deep gradient overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{ backgroundImage: "url(/images/background-1.jpg)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />
            </div>

            {/* Subtle accent glow */}
            <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[180px] z-0" />

            <Container className="relative z-10">
                <div className="max-w-3xl">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-accent text-sm tracking-[0.25em] uppercase font-medium mb-8"
                    >
                        {hero.eyebrow}
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] tracking-tight text-fg"
                    >
                        <span className="block">{hero.headline[0]}</span>
                        <span className="block italic text-fg-muted">
                            {hero.headline[1]}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                        className="mt-8 max-w-xl text-lg text-fg-muted leading-relaxed"
                    >
                        {hero.sub}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-12 flex flex-wrap items-center gap-4"
                    >
                        <a
                            href={hero.ctaPrimary.href}
                            className="group inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-bg pl-6 pr-2 py-2 rounded-full font-medium transition-all"
                        >
                            <span>{hero.ctaPrimary.label}</span>
                            <span className="w-9 h-9 rounded-full bg-bg text-accent flex items-center justify-center group-hover:rotate-45 transition-transform">
                                <ArrowUpRight size={16} strokeWidth={2.2} />
                            </span>
                        </a>

                        <a
                            href={hero.ctaSecondary.href}
                            className="group inline-flex items-center gap-3 border border-border-strong hover:border-accent text-fg pl-6 pr-2 py-2 rounded-full font-medium transition-all"
                        >
                            <span>{hero.ctaSecondary.label}</span>
                            <span className="w-9 h-9 rounded-full bg-bg-card text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-bg transition-colors">
                                <Play size={14} strokeWidth={2.2} fill="currentColor" />
                            </span>
                        </a>
                    </motion.div>
                </div>
            </Container>

            {/* Subtle bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent z-0" />
        </section>
    );
}

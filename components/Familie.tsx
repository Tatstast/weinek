"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "./Container";
import { family } from "@/lib/data";

export function Familie() {
    return (
        <section id="familie" className="relative py-32 md:py-40">
            <Container>
                <div className="max-w-2xl mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5 }}
                        className="text-accent text-xs tracking-[0.25em] uppercase font-medium mb-6"
                    >
                        Die Familie
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight"
                    >
                        Vier Stimmen,{" "}
                        <span className="italic text-fg-muted">eine Familie.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {family.map((person, i) => (
                        <motion.article
                            key={person.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.55, delay: i * 0.08 }}
                            className="group relative overflow-hidden rounded-3xl border border-border bg-bg-card card-hover"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <Image
                                    src={person.image}
                                    alt={person.name}
                                    fill
                                    sizes="(min-width:1024px) 280px, (min-width:640px) 50vw, 100vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg-card to-transparent" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">
                                    {person.role}
                                </p>
                                <h3 className="font-display text-2xl leading-tight">
                                    {person.name}
                                </h3>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </Container>
        </section>
    );
}

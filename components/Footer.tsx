import { Mail, MapPin, Linkedin, Facebook } from "lucide-react";
import { Container } from "./Container";
import { site, nav } from "@/lib/data";

export function Footer() {
    return (
        <footer className="border-t border-border/50 bg-bg-elev py-16">
            <Container>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-10 border-b border-border/40">
                    <a href="#hero" className="font-display text-2xl">
                        {site.name}
                        <span className="ml-2 text-fg-dim text-xs tracking-widest uppercase">
                            {site.tagline}
                        </span>
                    </a>
                    <div className="flex items-center gap-3">
                        <a
                            href={site.social.linkedin}
                            target="_blank"
                            rel="noopener"
                            aria-label="LinkedIn"
                            className="w-10 h-10 rounded-full border border-border hover:border-accent hover:text-accent flex items-center justify-center text-fg-muted transition-colors"
                        >
                            <Linkedin size={16} />
                        </a>
                        <a
                            href={site.social.facebook}
                            target="_blank"
                            rel="noopener"
                            aria-label="Facebook"
                            className="w-10 h-10 rounded-full border border-border hover:border-accent hover:text-accent flex items-center justify-center text-fg-muted transition-colors"
                        >
                            <Facebook size={16} />
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10">
                    <div className="space-y-3 text-sm text-fg-muted">
                        <div className="flex items-center gap-3">
                            <Mail size={15} className="text-accent" />
                            <a
                                href={`mailto:${site.email}`}
                                className="hover:text-fg transition-colors"
                            >
                                {site.email}
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin size={15} className="text-accent" />
                            <span>{site.address}</span>
                        </div>
                        <p className="text-fg-dim text-xs pt-4">
                            © {new Date().getFullYear()} {site.name}.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
                            Inhalt
                        </h4>
                        <ul className="space-y-2 text-sm">
                            {nav.map((n) => (
                                <li key={n.href}>
                                    <a
                                        href={n.href}
                                        className="text-fg-muted hover:text-fg transition-colors"
                                    >
                                        {n.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
                            Rechtliches
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="text-fg-muted hover:text-fg transition-colors"
                                >
                                    Impressum
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-fg-muted hover:text-fg transition-colors"
                                >
                                    Datenschutz
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

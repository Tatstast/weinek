import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Familie } from "@/components/Familie";
import { Footer } from "@/components/Footer";
import { SectionPlaceholder } from "@/components/SectionPlaceholder";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <SectionPlaceholder
                    id="hoerbeispiele"
                    title="Hörbeispiele"
                    note="Audio-Sektion kommt in der nächsten Iteration."
                />
                <Familie />
                <SectionPlaceholder
                    id="ueber"
                    title="Stimmen mit Zweck und Bedeutung"
                    note="Über-Sektion kommt in der nächsten Iteration."
                />
                <SectionPlaceholder
                    id="leistungen"
                    title="Für jedes Projekt die passende Stimme"
                    note="Leistungs-Sektion kommt in der nächsten Iteration."
                />
                <SectionPlaceholder
                    id="preise"
                    title="Unsere Preise"
                    note="Preise-Sektion kommt in der nächsten Iteration."
                />
                <SectionPlaceholder
                    id="testimonials"
                    title="Die Stimmen unserer Kunden"
                    note="Testimonial-Sektion kommt in der nächsten Iteration."
                />
                <SectionPlaceholder
                    id="kontakt"
                    title="Kontakt"
                    note="Kontakt-Sektion kommt in der nächsten Iteration."
                />
            </main>
            <Footer />
        </>
    );
}

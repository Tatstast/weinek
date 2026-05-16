import { Container } from "./Container";

export function SectionPlaceholder({
    id,
    title,
    note,
}: {
    id: string;
    title: string;
    note: string;
}) {
    return (
        <section id={id} className="py-32 border-t border-border/30">
            <Container>
                <div className="rounded-3xl border border-dashed border-border-strong p-16 text-center">
                    <p className="text-xs uppercase tracking-[0.25em] text-fg-dim mb-4">
                        In Arbeit
                    </p>
                    <h2 className="font-display text-3xl mb-3">{title}</h2>
                    <p className="text-fg-muted text-sm">{note}</p>
                </div>
            </Container>
        </section>
    );
}

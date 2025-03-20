// components/media-section.tsx
export default function MediaSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">{title}</h2>
        <div className="space-y-8">{children}</div>
      </section>
    );
  }
  
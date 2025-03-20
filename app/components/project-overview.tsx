// components/project-overview.tsx
export default function ProjectOverview({ children }: { children: React.ReactNode }) {
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <div className="text-lg leading-relaxed">
          {children}
        </div>
      </section>
    );
  }
  
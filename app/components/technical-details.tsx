// components/technical-details.tsx
export default function TechnicalDetails({ children }: { children: React.ReactNode }) {
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Technical Details</h2>
        <ul className="list-disc list-inside space-y-1 text-lg">{children}</ul>
      </section>
    );
  }
  
// components/call-to-action.tsx
export default function CallToAction({ email }: { email: string }) {
    return (
      <section className="my-16 py-8 border-t border-b text-center">
        <p className="text-xl mb-4">Interested in collaborating or learning more?</p>
        <a
          href={`mailto:${email}`}
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Get in touch →
        </a>
      </section>
    );
  }
  
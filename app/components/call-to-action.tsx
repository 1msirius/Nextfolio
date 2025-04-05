export default function CallToAction({ email }: { email: string }) {
  return (
    <section className="my-16 py-8 border-t border-b text-center">
      <p className="text-lg italic text-zinc-700 mb-4">
      </p>
      <a
        href={`mailto:${email}`}
        className="inline-block px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition duration-200"
      >
        Transmit a signal →
      </a>
    </section>
  );
}

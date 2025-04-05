export default function SacredScroll({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 mb-12 px-6 py-6 border-l-4 border-pink-600 bg-pink-50 dark:bg-pink-900/10 dark:border-pink-400 rounded-md font-serif text-lg leading-relaxed tracking-wide text-pink-900 dark:text-pink-100 prose prose-pink">
      {children}
    </div>
  );
}

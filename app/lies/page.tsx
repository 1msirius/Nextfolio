// app/lies/page.tsx
import fs from 'fs';
import path from 'path';
import GalleryOfLies from '@/app/components/GalleryOfLies';

export default function LiesPage() {
  const filePath = path.join(process.cwd(), 'public', 'lies.json');
  const rawData = fs.readFileSync(filePath, 'utf-8');
  const lies = JSON.parse(rawData);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gallery of Lies</h1>
      <GalleryOfLies prompt="Lie to me" />
    </main>
  );
}

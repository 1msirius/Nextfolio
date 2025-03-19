// app/art/page.tsx
'use client';

import React from 'react';
import { ImageGrid } from '@/app/components/image-grid'; // Provided by the template
import dynamic from 'next/dynamic';

// We'll dynamically import our p5 wrapper to avoid SSR issues
const P5Sketch = dynamic(() => import('@/app/components/p5-sketch'), { ssr: false });

// Example static images (replace with your actual paths)
const images = [
  { src: '/photos/photo1.jpg', alt: 'Photo 1' },
  { src: '/photos/photo2.jpg', alt: 'Photo 2' },
  { src: '/photos/photo3.jpg', alt: 'Photo 3' },
];

export default function ArtPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Art</h1>

      {/* Static Images Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <ImageGrid images={images} />
      </section>

      {/* Interactive Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Interactive Sketches</h2>
        <p className="text-gray-600 mb-4">
          Explore some generative or interactive art pieces here.
        </p>
        <P5Sketch />
      </section>
    </div>
  );
}

// app/components/p5-sketch.tsx
'use client'; // important so we run in the browser

import React, { useRef, useEffect } from 'react';
import p5 from 'p5';
import dynamic from 'next/dynamic';

// Create a dynamic component that imports itself
const P5SketchClient = dynamic(() => import('./p5-sketch'), { ssr: false });

// This is the main component that will be imported by the page
export default function P5Sketch() {
  return <P5SketchClient />;
}

// This is the actual sketch component that will be dynamically imported
export function P5SketchComponent() {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Define your p5 sketch
    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(400, 400);
      };

      p.draw = () => {
        p.background(220);
        p.fill(255, 0, 0);
        p.ellipse(p.width / 2, p.height / 2, 50, 50);
      };
    };

    // Instantiate p5 with your sketch, attaching to the DOM element
    const p5Instance = new p5(sketch, sketchRef.current as HTMLElement);

    // Cleanup on unmount
    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={sketchRef}></div>;
}

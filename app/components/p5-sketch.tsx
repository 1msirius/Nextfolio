// app/components/p5-sketch.tsx
'use client'; // important so we run in the browser

import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const P5Sketch = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Basic p5 sketch
    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(400, 400);
      };

      p.draw = () => {
        p.background(220);
        p.ellipse(p.width / 2, p.height / 2, 80, 80);
      };
    };

    // Create new p5 instance
    if (sketchRef.current) {
      new p5(sketch, sketchRef.current);
    }

    // Cleanup
    return () => {
      if (sketchRef.current) {
        sketchRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={sketchRef}></div>;
};

export default P5Sketch;

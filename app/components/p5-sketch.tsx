// app/components/p5-sketch.tsx
'use client'; // important so we run in the browser

import React, { useRef, useEffect, useState } from 'react';
import p5 from 'p5';

const P5Sketch = () => {
  const sketchRef = useRef<HTMLDivElement>(null);
  const [xAmplitude, setXAmplitude] = useState(20);
  const [yAmplitude, setYAmplitude] = useState(10);

  useEffect(() => {
    const sketch = (p: p5) => {
      function drawBrushStroke(x: number, y: number, length: number, xAmp: number, yAmp: number) {
        p.push();
        p.translate(x, y);
        p.rotate(p.random(p.TWO_PI));
        const hue = 20;
        const brightness = p.map(
          p.dist(x, y, p.width / 2, p.height / 2),
          0,
          p.width / 2,
          100,
          10
        );
        p.strokeWeight(p.random(1, 5));
        p.stroke(hue, p.random(50, 80), brightness, 1.0);
        p.noFill();
        p.beginShape();
        for (let t = 0; t < length; t++) {
          const nx = xAmp * p.cos(t * 0.1) * 10 + p.noise(t * 0.1) * 10 + p.random(-5, 5);
          const ny = yAmp * p.sin(t * 0.1) * 10 + p.noise(t * 0.1 + 10) * 20 + p.random(-5, 5);
          p.curveVertex(nx, ny);
        }
        p.endShape();
        p.pop();
      }

      p.setup = () => {
        p.createCanvas(600, 600);
        p.background(20);
        p.colorMode(p.HSB, 360, 100, 100, 1.0);
        p.noLoop();
      };

      p.draw = () => {
        p.fill(20, 20, 20, 25);
        p.rect(0, 0, p.width, p.height);
        p.blendMode(p.ADD);
        
        for (let i = 0; i < 200; i++) {
          drawBrushStroke(
            p.random(p.width),
            p.random(p.height),
            p.random(5, 40),
            xAmplitude,
            yAmplitude
          );
        }
        p.blendMode(p.BLEND);
      };
    };

    let p5Instance: p5;
    if (sketchRef.current) {
      p5Instance = new p5(sketch, sketchRef.current);
    }

    return () => {
      p5Instance?.remove();
    };
  }, [xAmplitude, yAmplitude]);

  return (
    <div>
      <div ref={sketchRef}></div>
      <div className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">X Amplitude</label>
          <input
            type="range"
            min="0"
            max="50"
            value={xAmplitude}
            onChange={(e) => setXAmplitude(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Y Amplitude</label>
          <input
            type="range"
            min="0"
            max="50"
            value={yAmplitude}
            onChange={(e) => setYAmplitude(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default P5Sketch;

"use client";

import React, { useRef, useState, useEffect } from "react";
import P5Container from "./P5Container";

export default function EncasedMeltingSphere() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const sketch = (p: any, parent: HTMLDivElement) => {
    const numTextures = 10;
    let textures: any[] = [];
    let currentIndex = 0;
    let nextIndex = 1;
    let lastSwitchTime = 0;
    const switchInterval = 3000;
    const alpha = 180;

    p.preload = () => {
      for (let i = 0; i < numTextures; i++) {
        textures[i] = p.loadImage(`/photos/texture${i}.png`);
      }
    };

    p.setup = () => {
      p.frameRate(30);
      p.createCanvas(600, 600, p.WEBGL).parent(parent);
      p.camera(0, 0, 2000, 0, 0, 0, 0, 1, 0);
      lastSwitchTime = p.millis();
    };

    p.draw = () => {
      p.noStroke();
      p.orbitControl();
      p.background(70);
      p.ambientLight(255);
      p.directionalLight(70, 0, 50, -0.5, 1, -4);

      const t = p.frameCount / (16 * 30);
      p.rotateY(p.TWO_PI * t);
      p.scale(p.map(p.sin(p.TWO_PI * t), -1, 1, 2.0, 2.5));

      const timeSinceSwitch = p.millis() - lastSwitchTime;
      const fade = p.constrain(timeSinceSwitch / 1000, 0, 1);

      if (textures[nextIndex]) {
        p.push();
        p.tint(255, alpha * (1 - fade));
        p.texture(textures[nextIndex]);
        p.specularMaterial(255);
        p.shininess(1);
        p.sphere(p.width / 2);
        p.pop();
      }

      if (textures[currentIndex]) {
        p.push();
        p.tint(255, alpha * fade);
        p.texture(textures[currentIndex]);
        p.specularMaterial(255);
        p.shininess(1);
        p.sphere(p.width / 2);
        p.pop();
      }

      if (timeSinceSwitch > switchInterval) {
        nextIndex = currentIndex;
        currentIndex = (currentIndex + 1) % numTextures;
        lastSwitchTime = p.millis();
      }
    };
  };

  return <div ref={ref}>{visible && <P5Container sketch={sketch} />}</div>;
}

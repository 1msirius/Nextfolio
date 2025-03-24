"use client";
import React, { useRef, useState, useEffect } from "react";
import P5Container from "./P5Container";

const sketch = (p: any, parent: HTMLDivElement) => {
  let myShader: any;
  let gui: any;

  const params = {
    carrierFreqX: 0.5,
    carrierFreqY: 0.5,
    modulatorFreq: 0.5,
    modulationIndex: 1.0,
    amplitudeModulationIndex: 1.0,
    modulationCenterX: 0.0,
    modulationCenterY: 0.0,
    lfoFrequency: 0.1,
    lfoAmplitude: 0.5,
  };

  p.preload = () => {
    myShader = p.loadShader(
      "/sketches/spatial_synthesizer/shader.vert",
      "/sketches/spatial_synthesizer/fm.frag"
    );
  };

  p.setup = async () => {
    p.createCanvas(600, 600, p.WEBGL).parent(parent);

    const { GUI } = await import("dat.gui");
    gui = new GUI({ width: 300 });
    p.gui = gui;

    const ranges: Record<string, [number, number, number]> = {
      carrierFreqX: [0.1, 10, 0.1],
      carrierFreqY: [0.1, 10, 0.1],
      modulatorFreq: [0.1, 10, 0.1],
      modulationIndex: [0, 5, 0.1],
      amplitudeModulationIndex: [0, 5, 0.1],
      modulationCenterX: [-1, 1, 0.01],
      modulationCenterY: [-1, 1, 0.01],
      lfoFrequency: [0, 10, 0.01],
      lfoAmplitude: [0, 2, 0.01],
    };

    Object.entries(ranges).forEach(([key, [min, max, step]]) =>
      gui.add(params, key, min, max).step(step).name(key)
    );
  };

  p.draw = () => {
    p.shader(myShader);

    // Set all uniforms except center
    Object.entries(params).forEach(([key, value]) => {
      if (key === "modulationCenterX" || key === "modulationCenterY") return;
      myShader.setUniform(`u_${key}`, value);
    });

    // Combined vec2 uniform
    myShader.setUniform("u_modulationCenter", [
      params.modulationCenterX,
      params.modulationCenterY,
    ]);

    myShader.setUniform("u_resolution", [p.width, p.height]);
    myShader.setUniform("u_time", p.millis() / 1000);
    p.rect(-p.width / 2, -p.height / 2, p.width, p.height);
  };
};

export default function SpatialSynthesizerSketch() {
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

  return <div ref={ref}>{visible && <P5Container sketch={sketch} />}</div>;
}

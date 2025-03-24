"use client";
import React, { useEffect, useRef } from "react";

export default function P5Container({ sketch }: { sketch: any }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    // Force instance to any so TS won’t complain about gui
    const instance: any = new (window as any).p5((p: any) => sketch(p, ref.current), ref.current);

    return () => {
      instance.gui?.destroy();
      instance.remove();
    };
  }, [sketch]);

  return <div ref={ref} style={{ width: 600, height: 600 }} />;
}

// src/types/global.d.ts

declare function setupGUI(): void;

declare global {
    interface Window {
      p5: typeof import("p5");
    }
}

// This file needs to be a module to augment global scope
export {};
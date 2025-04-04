// app/components/Whisper.tsx
import React from "react";

type Props = {
  text: string;
};

export default function Whisper({ text }: Props) {
  return (
    <div className="mt-12 text-xs text-zinc-600 italic text-center">
      {text}
    </div>
  );
}

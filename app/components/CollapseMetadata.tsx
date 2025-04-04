// app/components/CollapseMetadata.tsx
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function CollapseMetadata({ children }: Props) {
    return (
      <div className="mt-8 bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg text-sm text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700">
        {children}
      </div>
    );
  }
  

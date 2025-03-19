"use client";
import YT from "react-youtube";

export function YouTubeComponent(props: any) {
  return (
    <div className="relative w-full h-0 pb-[56.25%] my-6">
      <YT
        opts={{
          height: '100%',
          width: '100%',
        }}
        {...props}
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
}

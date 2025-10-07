"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  videoSrc: string;
  posterSrc: string;
  className?: string;
}

export function VideoBackground({
  videoSrc,
  posterSrc,
  className = "",
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      // Explicitly try to play for Safari
      video.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    };

    video.addEventListener("loadeddata", handleLoadedData);

    // Try to load and play immediately
    video.load();

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
    };
  }, []);

  return (
    <>
      <Image
        src={posterSrc}
        alt="Background"
        fill
        className={`transition-opacity duration-500 ${isVideoLoaded ? "opacity-0" : "opacity-100"} ${className}`}
        priority={false}
        sizes="100vw"
      />
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={posterSrc}
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${isVideoLoaded ? "opacity-100" : "opacity-0"} ${className}`}
        style={{ objectFit: 'cover' }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </>
  );
}

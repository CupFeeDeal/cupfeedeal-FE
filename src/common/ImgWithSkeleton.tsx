"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  className?: string;
}

const ImageWithSkeleton = ({
  src,
  alt,
  fill,
  sizes,
  className,
}: ImageWithSkeletonProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const skeletonContent = (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 bg-Grey-200 rounded-lg" />
      <div
        className="absolute inset-0 overflow-hidden rounded-lg animate-shimmer"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)",
        }}
      />
    </div>
  );

  return (
    <>
      {/* 로딩 중일 때만 스켈레톤 덧씌우기 */}
      {isLoading && skeletonContent}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        className={`${className} ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </>
  );
};

export default ImageWithSkeleton;

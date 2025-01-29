"use client";

export default function BottomSheetSkeleton() {
  return (
    <div className="animate-pulse p-5 bg-white">
      <div className="w-full h-5 bg-Grey-200 rounded mb-3"></div>
      <div className="w-full h-5 bg-Grey-200 rounded mb-3"></div>
      <div className="w-[60%] h-5 bg-Grey-200 rounded mb-5"></div>

      <div className="w-full h-40 bg-Grey-300 rounded-lg mb-5" />
      <div className="w-full h-5 bg-Grey-200 rounded mb-3"></div>
      <div className="w-[70%] h-5 bg-Grey-200 rounded"></div>
    </div>
  );
}

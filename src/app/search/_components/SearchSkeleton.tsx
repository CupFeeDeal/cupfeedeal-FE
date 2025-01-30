export default function SearchSkeleton() {
  return (
    <div className="relative w-full flex-1">
      {/* SearchBar 자리 */}
      <div className="w-full px-5 mt-12 absolute z-10 top-4">
        <div
          className="flex flex-row items-center gap-3 px-3 py-[0.88rem] 
                        rounded-[0.625rem] bg-white 
                        shadow-[0_0_11px_0_rgba(153,153,159,0.26)] 
                        animate-pulse"
        >
          <div className="flex-1 h-4 bg-gray-200 rounded-md" />
          <div className="w-5 h-5 bg-gray-200 rounded-full" />
        </div>
      </div>

      {/* SearchMenu 자리 */}
      <div className="w-full flex flex-row justify-between px-5">
        <span
          className="mt-12 absolute z-10 top-[4.75rem] flex h-9 px-4 py-2 
                    items-center rounded-[1.15625rem] 
                    bg-white
                    shadow-[0_0_12.7px_0_rgba(175,176,187,0.31)] 
                    animate-pulse"
        >
          <div className="w-16 h-4 bg-gray-200 rounded-md" />
        </span>
        <span className="mt-12 absolute z-10 top-[4.75rem] right-5 flex flex-col gap-4">
          {/* 좋아요 버튼 */}
          <div
            className="w-9 h-9 border-[1px] border-gray-200 
                          rounded-full bg-white animate-pulse"
          />
          {/* 현위치 버튼 */}
          <div
            className="w-9 h-9 border-[1px] border-gray-200 
                          rounded-full bg-white animate-pulse"
          />
        </span>
      </div>

      {/* 지도 자리 */}
      <div
        className="bg-gray-200 animate-pulse"
        style={{ width: "100%", height: "calc(100vh - 48px)" }}
      />
    </div>
  );
}

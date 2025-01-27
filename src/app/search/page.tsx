// components
import { Suspense } from "react";
import TopBar from "@common/TopBar";
import SearchContent from "./_components/SearchContent";
import { searchServerApi } from "@api/searchServer";

interface SearchProps {
  searchParams: Promise<{
    q?: string;
    like?: string;
    id?: string;
  }>;
}

export default async function Search({ searchParams }: SearchProps) {
  const sp = await searchParams;
  const query = sp.q || "";
  const likeStr = sp.like || "false";
  const like = likeStr === "true";
  const detailId = Number(sp.id);

  const cafes = await searchServerApi.getCafes(query, like);

  let cafeDetail = null;
  if (detailId) {
    cafeDetail = await searchServerApi.getCafeDetail(detailId);
  }

  return (
    <div className="flex w-full h-full flex-col">
      <TopBar title="커피딜 지도" backLink="/home" />
      <div className="flex-1 overflow-auto">
        {/* useSearchParams쓴 거라.. suspense 안 쓰면 빌드 오류남. 나중에 로딩 화면으로 교체 */}
        <Suspense fallback={<div>로딩 중</div>}>
          <SearchContent
            initialCafes={cafes}
            initialQuery={query}
            initialLike={like}
            detailId={detailId}
            detailCafe={cafeDetail}
          />
        </Suspense>
      </div>
    </div>
  );
}

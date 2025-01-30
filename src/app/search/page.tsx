// components
import { Suspense } from "react";
import TopBar from "@common/TopBar";
import SearchContent from "./_components/SearchContent";
import { searchServerApi } from "@api/server/searchServer";

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

  return (
    <div className="flex w-full h-full flex-col">
      <TopBar title="커피딜 지도" backLink="/home" />
      <div className="flex-1 overflow-auto">
        <Suspense fallback={<></>}>
          <SearchContent
            initialCafes={cafes}
            initialQuery={query}
            initialLike={like}
            detailId={detailId}
          />
        </Suspense>
      </div>
    </div>
  );
}

// components
import TopBar from "@common/TopBar";
import SavedCats from "./_components/SavedCats";
import { userServerApi } from "@api/server/userServer";

export default async function Previous() {
  const cupcatData = await userServerApi.getCupcats();

  return (
    <div className="flex w-full h-full flex-col">
      <TopBar title="지나간 컵캣" />
      <div className="flex-1 overflow-auto bg-Blue_Grey">
        <SavedCats cupcatData={cupcatData} />
      </div>
    </div>
  );
}

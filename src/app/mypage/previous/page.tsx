// components
import TopBar from "@common/TopBar";
import SavedCats from "./_components/SavedCats";

export default function Previous() {
  return (
    <div className="flex w-full h-full flex-col">
      <TopBar title="지나간 컵캣" />
      <div className="flex-1 overflow-auto bg-Blue_Grey">
        <SavedCats />
      </div>
    </div>
  );
}
